using SpotifyAPI.Web;
using System;

namespace ObviouslyCool.Core
{
    public class SpotifyClientFactory
    {
        /// <summary>
        /// This handles refreshing the access token by using the given refresh token.
        /// It's assumed that you have gone through the Authorization Code flow to acquire a refresh token.
        /// It's also assumed that this refresh token will never expire.
        /// 
        /// <see href="https://luigicruz.dev/blog/using-spotify-api#authenticating-your-app"/>
        /// </summary>
        public SpotifyClientConfig BuildConfigWithRefreshToken(string clientId, string clientSecret, string refreshToken)
        {
            // This mocked response needs to expired in order for the access token to get refreshed initially
            var response = new AuthorizationCodeTokenResponse
            {
                RefreshToken = refreshToken,
                CreatedAt = new DateTime(2022, 8, 30, 20, 0, 0).ToUniversalTime(),
                ExpiresIn = 3600,
            };

            return SpotifyClientConfig
                .CreateDefault()
                .WithAuthenticator(new AuthorizationCodeAuthenticator(clientId, clientSecret, response));
        }

        public ISpotifyClient Build(string accessToken)
        {
            return new SpotifyClient(accessToken);
        }

        public ISpotifyClient Build(SpotifyClientConfig config)
        {
            return new SpotifyClient(config);
        }
    }
}
