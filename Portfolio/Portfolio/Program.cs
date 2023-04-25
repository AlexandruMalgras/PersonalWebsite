
using Portfolio;
using Portfolio.Interfaces;

const string allowedOrigins = "origin";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpClient();
builder.Services.AddSingleton<IMailer, SendEmail>();
builder.Services.AddCors((options) =>
{
    options.AddPolicy(allowedOrigins, (policy) =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(allowedOrigins);

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();