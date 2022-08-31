namespace ObviouslyCool.Web
{
    public class SpotifyOptions
    {
        public const string Spotify = "Spotify";

        public string ClientId { get; set; } = string.Empty;
        public string ClientSecret { get; set; } = string.Empty;
        public string RefreshToken { get; set; } = string.Empty;
    }
}
