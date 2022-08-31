using Microsoft.AspNetCore.Mvc;
using ObviouslyCool.Core;

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
        public async Task<IEnumerable<string>> GetArtists()
        {
            _logger.LogInformation("Spotify API was called.");
            var topArtists = await spotify.GetTopArtists();
            return topArtists.Items.Select(i => i.Name).ToList();
        }
    }
}