using System.Runtime.CompilerServices;
using System.Security.Cryptography.Xml;

namespace Portfolio.Configuration
{
    public class MailgunConfig
    {
        private static readonly MailgunConfig instance = new MailgunConfig();
        private readonly IConfiguration configuration;

        public string BaseURL { get; private set; }
        public string ApiKey { get; private set; }
        public string Domain { get; private set; }

        private MailgunConfig()
        {
            this.configuration = new ConfigurationBuilder().AddJsonFile("./mailgunconfiguration.json").Build();

            this.BaseURL = configuration["MailgunConfiguration:BaseURL"];
            this.ApiKey = configuration["MailgunConfiguration:ApiKey"];
            this.Domain = configuration["MailgunConfiguration:Domain"];
        }

        public static MailgunConfig Instance { get { return instance; } }
    }
}
