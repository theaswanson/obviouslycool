using SpotifyAPI.Web;
using System.Threading.Tasks;

namespace ObviouslyCool.Core.Services
{
    public interface ISpotifyService
    {
        Task<Paging<FullArtist>> GetTopArtists();
    }
}