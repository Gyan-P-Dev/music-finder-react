import axios from "axios";

export const searchArtists = async (
  cityName,
  pageNum = 0,
  itemsPerPage = 10,
  setArtists,
  setArtistCount,
  setLoading
) => {
  setLoading(true);
  try {
    const response = await axios.get("https://musicbrainz.org/ws/2/artist", {
      params: {
        query: cityName,
        fmt: "json",
        limit: itemsPerPage,
        offset: pageNum,
      },
    });
    setArtistCount(response.data.count);
    setArtists(response.data.artists);
  } catch (error) {
    console.error("Error fetching artists:", error);
  } finally {
    setLoading(false);
  }
};
