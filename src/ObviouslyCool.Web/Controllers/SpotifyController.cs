using Microsoft.AspNetCore.Mvc;
using ObviouslyCool.Core.Models;
using ObviouslyCool.Core.Services;

namespace ObviouslyCool.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SpotifyController : ControllerBase
    {
        private readonly ILogger<SpotifyController> _logger;
        private readonly ISpotifyService spotify;

        public SpotifyController(ILogger<SpotifyController> logger, ISpotifyService spotify)
        {
            _logger = logger;
            this.spotify = spotify;
        }

        [HttpGet]
        public async Task<IEnumerable<TopArtist>> GetArtists()
        {
            _logger.LogInformation("Spotify API was called.");

            var topArtists = await spotify.GetTopArtists();

            if (topArtists.Items is null)
            {
                return Enumerable.Empty<TopArtist>();
            }

            return topArtists.Items.Select(i => new TopArtist
            {
                Name = i.Name,
                ImageUrl = i.Images.FirstOrDefault()?.Url ?? string.Empty,
                ArtistUrl = i.ExternalUrls.FirstOrDefault(x => x.Key == "spotify").Value ?? string.Empty
            });
        }
    }
}