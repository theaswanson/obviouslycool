using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using ObviouslyCool.Core.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ObviouslyCool.Core.Services
{
    public class SpotifyCache : ISpotifyCache
    {
        private readonly ISpotifyService spotifyService;
        private readonly IMemoryCache cache;
        private readonly ILogger<SpotifyCache> logger;
        private readonly TimeSpan expiresIn = TimeSpan.FromDays(1);
        private const string cacheKey = "spotify-top-artists";

        public SpotifyCache(ISpotifyService spotifyService, IMemoryCache cache, ILogger<SpotifyCache> logger)
        {
            this.spotifyService = spotifyService;
            this.cache = cache;
            this.logger = logger;
        }

        public async Task<IEnumerable<TopArtist>> GetTopArtists()
        {
            if (!cache.TryGetValue(cacheKey, out IEnumerable<TopArtist> cacheValue))
            {
                logger.LogInformation("Updating Spotify cache");
                cacheValue = await spotifyService.GetTopArtists();
                UpdateCache(cacheValue);
            }
            else
            {
                logger.LogInformation("Hit Spotify cache");
            }

            return cacheValue;
        }

        private void UpdateCache(IEnumerable<TopArtist> cacheValue)
        {
            var options = new MemoryCacheEntryOptions().SetAbsoluteExpiration(expiresIn);
            cache.Set(cacheKey, cacheValue, options);
        }
    }
}

