using SpotifyAPI.Web;
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

        public async Task<Paging<FullArtist>> GetTopArtists()
        {
            return await client.Personalization.GetTopArtists();
        }
    }
}
