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
        private string BASE_URL;
        private string API_KEY;
        private string DOMAIN;

        private readonly IHttpClientFactory httpClientFactory;

        public SendEmail(IHttpClientFactory httpClientFactory)
        {
            this.httpClientFactory = httpClientFactory;

            this.mailgunConfig = MailgunConfig.Instance;

            this.BASE_URL = mailgunConfig.BaseURL;
            this.API_KEY = mailgunConfig.ApiKey;
            this.DOMAIN = mailgunConfig.Domain;
        }

        public async Task<RestResponse> SendEmailAsync(string fromName, string fromEmail, string fromPhoneNumber, string toEmail, string subject, string text)
        {
            using var httpClient = httpClientFactory.CreateClient();
            httpClient.BaseAddress = new Uri(BASE_URL);

            using var restClient = new RestClient(httpClient, options: new RestClientOptions
            {
                Authenticator = new HttpBasicAuthenticator("api", API_KEY)
            });

            var request = new RestRequest();
            request.AddParameter("domain", DOMAIN, ParameterType.UrlSegment);
            request.Resource = $"{DOMAIN}/messages";
            request.AddParameter("from", $"Mailer <alexandrumalgras@gmail.com>");
            request.AddParameter("to", toEmail);
            request.AddParameter("subject", subject);
            request.AddParameter("text", $"{text} \n Phone Number: {fromPhoneNumber} \n Email: {fromEmail}\n Name: {fromName}");
            request.Method = Method.Post;
            return await restClient.ExecuteAsync(request);
        }
    }
}
