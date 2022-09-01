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
        private readonly ISpotifyCache spotifyCache;

        public SpotifyController(ILogger<SpotifyController> logger, ISpotifyCache spotifyCache)
        {
            _logger = logger;
            this.spotifyCache = spotifyCache;
        }

        [HttpGet]
        public async Task<IEnumerable<TopArtist>> GetArtists()
        {
            return await spotifyCache.GetTopArtists() ?? Enumerable.Empty<TopArtist>();
        }
    }
}