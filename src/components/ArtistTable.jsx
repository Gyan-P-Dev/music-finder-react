import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ArtistTags from "./ArtistTags";
import LoadingIndicator from "./LoadingIndicator";

function ArtistTable({ artistData, loading, onSearch, city, totalArtists }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
    onSearch(city, currentPage + 1, itemsPerPage);
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      onSearch(city, currentPage - 1, itemsPerPage);
    }
  };

  const totalPages = Math.ceil(totalArtists / itemsPerPage);
  const isNextDisabled = currentPage >= totalPages - 1;
  const isPrevDisabled = currentPage <= 0;

  return (
    <TableContainer>
      <Typography variant="h6" sx={{ padding: 2 }}>
        Artists Nearby
      </Typography>
      {artistData?.length > 0 ? (
        <>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Artist</TableCell>
                <TableCell>Debut Year</TableCell>
                <TableCell>Hometown</TableCell>
                <TableCell>Genres</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {artistData.map((artist, index) => (
                <TableRow key={index}>
                  <TableCell>{artist?.name || "Unknown"}</TableCell>
                  <TableCell>{artist?.["life-span"]?.begin || "N/A"}</TableCell>
                  <TableCell>{artist?.area?.name || "N/A"}</TableCell>
                  <TableCell>
                    {artist?.tags ? (
                      <ArtistTags tags={artist?.tags} />
                    ) : (
                      "No genres listed"
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "20px" }}
          >
            <Button
              variant="contained"
              disabled={isPrevDisabled}
              onClick={goToPrevPage}
              sx={{
                backgroundColor: "#FF5722",
                color: "white",
                "&:disabled": { backgroundColor: "#ddd" },
              }}
            >
              Previous
            </Button>
            <Typography variant="body1" sx={{ margin: "0 10px" }}>
              Page: {currentPage + 1}
            </Typography>
            <Button
              variant="contained"
              disabled={isNextDisabled}
              onClick={goToNextPage}
              sx={{ backgroundColor: "#FF5722", color: "white" }}
            >
              Next
            </Button>
          </Box>

          <FormControl variant="outlined" size="small">
            <InputLabel>Items per page</InputLabel>
            <Select
              value={itemsPerPage}
              onChange={(e) => {
                onSearch(city, currentPage, Number(e.target.value));
                setItemsPerPage(Number(e.target.value));
              }}
              label="Items per page"
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>
        </>
      ) : loading ? (
        <LoadingIndicator message="Loading..." />
      ) : (
        <LoadingIndicator message="No results found" />
      )}
    </TableContainer>
  );
}

export default ArtistTable;
