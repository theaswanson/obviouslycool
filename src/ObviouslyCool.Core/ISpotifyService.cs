using SpotifyAPI.Web;
using System.Threading.Tasks;

namespace ObviouslyCool.Core
{
    public interface ISpotifyService
    {
        Task<Paging<FullArtist>> GetTopArtists();
    }
}