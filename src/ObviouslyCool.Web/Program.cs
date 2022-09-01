using Microsoft.Extensions.Options;
using ObviouslyCool.Core.Services;

namespace ObviouslyCool.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            ConfigureServices(builder.Services, builder.Configuration);

            var app = builder.Build();
            Configure(app);
        }

        private static void ConfigureServices(IServiceCollection services, IConfiguration configuration)
        {
            services.AddControllersWithViews();

            services.Configure<SpotifyOptions>(configuration.GetSection(SpotifyOptions.Spotify));

            services.AddTransient<SpotifyClientFactory>();
            services.AddTransient(sp =>
            {
                var clientFactory = sp.GetService<SpotifyClientFactory>()!;
                var spotifyOptions = sp.GetService<IOptions<SpotifyOptions>>()!.Value;

                var clientConfig = clientFactory.BuildConfigWithRefreshToken(spotifyOptions.ClientId, spotifyOptions.ClientSecret, spotifyOptions.RefreshToken);
                return clientFactory.Build(clientConfig);
            });

            services.AddTransient<ISpotifyService, SpotifyService>();
        }

        public static void Configure(WebApplication app)
        {
            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();


            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");

            app.MapFallbackToFile("index.html");

            app.Run();
        }
    }
}