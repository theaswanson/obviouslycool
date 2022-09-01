using ObviouslyCool.Core.Models;
using SpotifyAPI.Web;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ObviouslyCool.Core.Services
{
    public class SpotifyService : ISpotifyService
    {
        private readonly ISpotifyClient client;

        public SpotifyService(ISpotifyClient client)
        {
            this.client = client;
        }

        public async Task<IEnumerable<TopArtist>> GetTopArtists()
        {
            var topArtistsResponse = await client.Personalization.GetTopArtists();
            return topArtistsResponse.Items.Select(i => new TopArtist
            {
                Name = i.Name,
                ImageUrl = i.Images.FirstOrDefault()?.Url ?? string.Empty,
                ArtistUrl = i.ExternalUrls.FirstOrDefault(x => x.Key == "spotify").Value ?? string.Empty
            });
        }
    }
}
