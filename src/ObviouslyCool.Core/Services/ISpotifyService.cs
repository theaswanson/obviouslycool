using ObviouslyCool.Core.Models;
using SpotifyAPI.Web;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ObviouslyCool.Core.Services
{
    public interface ISpotifyService
    {
        Task<IEnumerable<TopArtist>> GetTopArtists();
    }
}