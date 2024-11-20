import React from "react";
import { Box, Chip } from "@mui/material";

const ArtistTags = ({ tags }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {tags.map((tag, index) => (
        <Chip
          key={index}
          label={tag.name}
          size="small"
          sx={{
            backgroundColor: "#FF5722",
            color: "white",
          }}
        />
      ))}
    </Box>
  );
};

export default ArtistTags;
