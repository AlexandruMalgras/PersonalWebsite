using RestSharp;

namespace Portfolio.Interfaces
{
    public interface IMailer
    {
        Task<RestResponse> SendEmailAsync(string fromName, string fromEmail, string fromPhoneNumber, string toEmail, string subject, string text);
    }
}
