import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "../../organisms/adminNavbar";
import {
  titleStyle,
  backgroundStyles
} from "./styles";
import DashboardStats from "../../higherOrderComponents/DashboardStats";

const Dashbord: React.FC = () => {
  return (
    <Box sx={backgroundStyles}>
      {/* Navbar */}
      <Navbar />

      <Container >
        <Typography variant="h5" sx={titleStyle}>
          DASHBORD
        </Typography>
        <DashboardStats/>
      </Container>
    </Box>
  );
};

export default Dashbord;