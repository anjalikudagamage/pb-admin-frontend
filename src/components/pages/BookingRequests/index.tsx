import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "../../organisms/adminNavbar";
import UserTable from "../../higherOrderComponents/UserTable";

const BookingRequests: React.FC = () => {
  return (
    <Box>
      {/* Navbar */}
      <Navbar />

      <Container>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
          Users
        </Typography>
        <UserTable />
      </Container>
    </Box>
  );
};

export default BookingRequests;
