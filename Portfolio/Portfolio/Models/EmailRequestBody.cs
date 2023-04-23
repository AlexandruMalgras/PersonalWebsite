namespace Portfolio.Models
{
    public class EmailRequestBody
    {
        public string fromName { get; set; }
        public string fromEmail { get; set; }
        public string fromPhoneNumber { get; set; }
        public string text { get; set; }
    }
}
