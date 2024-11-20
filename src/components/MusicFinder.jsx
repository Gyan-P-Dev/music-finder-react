import { useEffect, useState } from "react";
import axios from "axios";
import LocationInput from "./LocationInput";
import ArtistTable from "./ArtistTable";
import { fetchCityName } from "../utiles/fetchCityNameUtile";
import { searchArtists } from "../utiles/searchArtistsUtiles";
import { Box, Container } from "@mui/material";

function MusicFinderApp() {
  const [artists, setArtists] = useState([]);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [artistCount, setArtistCount] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const cityName = await fetchCityName(
          pos.coords.latitude,
          pos.coords.longitude
        );
        searchArtists(cityName, 0, 10, setArtists, setArtistCount, setLoading);
      },
      async () => {
        const fallbackResponse = await axios.get(process.env.REACT_APP_GEO_API);
        searchArtists(
          fallbackResponse.data.city,
          0,
          10,
          setArtists,
          setArtistCount,
          setLoading
        );
      }
    );
  }, []);

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <LocationInput
          onSearch={(city, page, limit) =>
            searchArtists(
              city,
              page,
              limit,
              setArtists,
              setArtistCount,
              setLoading
            )
          }
          city={location}
          setCity={setLocation}
        />
        <ArtistTable
          totalArtists={artistCount}
          artistData={artists}
          loading={loading}
          onSearch={(city, page, limit) =>
            searchArtists(
              city,
              page,
              limit,
              setArtists,
              setArtistCount,
              setLoading
            )
          }
          city={location}
        />
      </Box>
    </Container>
  );
}

export default MusicFinderApp;
