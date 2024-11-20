import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingIndicator = ({ message }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "200px",
      }}
    >
      <CircularProgress sx={{ color: "#FF5722", marginBottom: "10px" }} />
      <Typography variant="body1">{message}</Typography>
    </Box>
  );
};

export default LoadingIndicator;
