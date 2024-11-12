import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "../../organisms/Navbar";
import UserTable from "../../higherOrderComponents/BookingRequetsCard";
import { titleStyle, backgroundStyles } from "./styles";

const BookingRequests: React.FC = () => {
  return (
    <Box sx={backgroundStyles}>
      <Navbar />
      <Container>
        <Typography variant="h5" sx={titleStyle}>
          BOOKING REQUETS
        </Typography>
        <UserTable />
      </Container>
    </Box>
  );
};

export default BookingRequests;
