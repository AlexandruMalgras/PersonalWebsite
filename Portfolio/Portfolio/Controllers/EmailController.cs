using Microsoft.AspNetCore.Mvc;
using Portfolio.Interfaces;
using Portfolio.Models;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmailController : ControllerBase
    {
        private readonly IMailer mailer;

        public EmailController(IMailer mailer)
        {
            this.mailer = mailer;
        }

        [HttpPost(Name = "SendEmail")]
        public async Task<IActionResult> PostEmail([FromBody] EmailRequestBody body)
        {
            var response = await this.mailer.SendEmailAsync(body.fromName, body.fromEmail, body.fromPhoneNumber, "alexandru_malgras@yahoo.com", "WebsiteContact", body.text);

            if (response.IsSuccessful)
            {
                return Ok();
            }
            else
            {
                return BadRequest(response.Content);
            }
        }
    }
}