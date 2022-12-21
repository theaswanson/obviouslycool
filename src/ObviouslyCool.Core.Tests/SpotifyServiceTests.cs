using Moq;
using ObviouslyCool.Core.Services;
using SpotifyAPI.Web;

namespace ObviouslyCool.Core.Tests
{
    public class SpotifyServiceTests
    {
        Mock<ISpotifyClient> spotifyClient;
        SpotifyService service;

        [SetUp]
        public void Setup()
        {
            spotifyClient = MockSpotifyClient();

            service = new SpotifyService(spotifyClient.Object);
        }

        [Test]
        public async Task WhenGettingTopArtists_CallsAPI()
        {
            var response = await service.GetTopArtists();

            spotifyClient.Verify(c => c.Personalization.GetTopArtists(It.Is<PersonalizationTopRequest>(r => r.TimeRangeParam == PersonalizationTopRequest.TimeRange.ShortTerm)), Times.Once);
        }

        private Mock<ISpotifyClient> MockSpotifyClient()
        {
            var client = new Mock<ISpotifyClient>();

            client.SetupGet(c => c.Personalization).Returns(MockPersonalizationClient().Object);

            return client;

            static Mock<IPersonalizationClient> MockPersonalizationClient()
            {
                var personalizationClient = new Mock<IPersonalizationClient>();

                var topArtistsResponse = new Paging<FullArtist>
                {
                    Items = new List<FullArtist>
                    {
                        new FullArtist
                        {
                            Name = "Yoste"
                        }
                    }
                };

                personalizationClient.Setup(c => c.GetTopArtists(It.IsAny<PersonalizationTopRequest>())).ReturnsAsync(topArtistsResponse);

                return personalizationClient;
            }
        }
    }
}