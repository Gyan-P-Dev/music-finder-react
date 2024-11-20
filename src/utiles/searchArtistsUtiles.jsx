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
    const response = await axios.get(process.env.REACT_APP_MUSIC_API, {
      params: {
        query: `${cityName} AND begin:[2014-01-01 TO 2024-12-31]`,
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
