using System.Collections.Generic;
using System.Threading.Tasks;
using ObviouslyCool.Core.Models;

namespace ObviouslyCool.Core.Services
{
    public interface ISpotifyCache
    {
        Task<IEnumerable<TopArtist>> GetTopArtists();
    }
}