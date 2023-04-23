using System;
using System.IO;
using System.Net.Http;
using Portfolio.Interfaces;
using RestSharp;
using RestSharp.Authenticators;

namespace Portfolio
{
    public class SendEmail : IMailer
    {
        private const string BASE_URL = @"https://api.mailgun.net/v3";
        private const string API_KEY = @"46e98a68dc7693a9e7ea77cffb9521bd-181449aa-19a0128f";
        private const string DOMAIN = @"sandboxff745ea952ba4a0cab92f49493ad32ad.mailgun.org";

        private readonly IHttpClientFactory httpClientFactory;

        public SendEmail(IHttpClientFactory httpClientFactory)
        {
            this.httpClientFactory = httpClientFactory;
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
            request.AddParameter("from", $"{fromName} <alexandrumalgras@gmail.com>");
            request.AddParameter("to", toEmail);
            request.AddParameter("subject", subject);
            request.AddParameter("text", $"{text}\nPhone Number: {fromPhoneNumber}\nEmail: {fromEmail}");
            request.Method = Method.Post;
            return await restClient.ExecuteAsync(request);
        }
    }
}
