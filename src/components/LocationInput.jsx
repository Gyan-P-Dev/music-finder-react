import React from "react";
import { TextField, Button, Box } from "@mui/material";

const LocationInput = ({ onSearch, city, setCity }) => {
  const executeSearch = () => {
    if (city.trim()) onSearch(city, 0, 10);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <TextField
        variant="outlined"
        placeholder="Enter your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        size="small"
        sx={{ mr: 2, width: "200px" }}
      />
      <Button variant="contained" color="primary" onClick={executeSearch}>
        Find
      </Button>
    </Box>
  );
};

export default LocationInput;
