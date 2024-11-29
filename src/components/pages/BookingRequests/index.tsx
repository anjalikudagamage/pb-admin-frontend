import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "../../organisms/Navbar";
import UserTable from "../../higherOrderComponents/BookingRequetsCard";
import { titleStyle, backgroundStyles } from "./styles";
import Footer from "../../atoms/Footer";

const BookingRequests: React.FC = () => {
  return (
    <Box sx={backgroundStyles}>
      <Navbar />
      <Container sx={titleStyle}>
        <Typography variant="h5" sx={titleStyle}>
          BOOKING REQUETS
        </Typography>
        <UserTable />
      </Container>
      <Footer/>
    </Box>
  );
};

export default BookingRequests;
