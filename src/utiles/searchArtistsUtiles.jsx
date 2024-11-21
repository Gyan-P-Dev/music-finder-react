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
    let foundedSince = new Date().getFullYear() - 10;
    const response = await axios.get(process.env.REACT_APP_MUSIC_API, {
      params: {
        query: `area:${cityName} AND begin:[${foundedSince} TO *]`,
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
