using System;
using System.IO;
using System.Net.Http;
using Portfolio.Configuration;
using Portfolio.Interfaces;
using RestSharp;
using RestSharp.Authenticators;

namespace Portfolio
{
    public class SendEmail : IMailer
    {
        private MailgunConfig mailgunConfig;

        private readonly IHttpClientFactory httpClientFactory;

        public SendEmail(IHttpClientFactory httpClientFactory)
        {
            this.httpClientFactory = httpClientFactory;

            this.mailgunConfig = MailgunConfig.Instance;
        }

        public async Task<RestResponse> SendEmailAsync(string fromName, string fromEmail, string fromPhoneNumber, string toEmail, string subject, string text)
        {
            using var httpClient = httpClientFactory.CreateClient();
            httpClient.BaseAddress = new Uri(mailgunConfig.BaseURL);

            using var restClient = new RestClient(httpClient, options: new RestClientOptions
            {
                Authenticator = new HttpBasicAuthenticator("api", mailgunConfig.ApiKey)
            });

            var request = new RestRequest();
            request.AddParameter("domain", mailgunConfig.Domain, ParameterType.UrlSegment);
            request.Resource = $"{mailgunConfig.Domain}/messages";
            request.AddParameter("from", $"Mailer <alexandrumalgras@gmail.com>");
            request.AddParameter("to", toEmail);
            request.AddParameter("subject", subject);
            request.AddParameter("text", $"{text} \n Phone Number: {fromPhoneNumber} \n Email: {fromEmail}\n Name: {fromName}");
            request.Method = Method.Post;
            return await restClient.ExecuteAsync(request);
        }
    }
}
