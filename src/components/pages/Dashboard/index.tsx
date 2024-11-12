import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Navbar from "../../organisms/adminNavbar";
import { backgroundStyles } from "./styles";
import DashboardStats from "../../higherOrderComponents/DashboardStats";
import TicketsChart from "../../higherOrderComponents/graph";
import BookingsByPackageType from "../../higherOrderComponents/graph2";
import NewVsReturningBookings from "../../higherOrderComponents/graph3";
import BarChartIcon from "@mui/icons-material/BarChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Dashbord: React.FC = () => {
  return (
    <Box sx={backgroundStyles}>
      {/* Navbar */}
      <Navbar />

      <Container sx={{ backgroundColor: "#1e1e2e", padding: "30px", borderRadius: "10px" }}>

        {/* Dashboard Stats and Charts in Grid */}
        <Grid container spacing={3} mt={3}>
          {/* Stats Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: "#2a2a2a", borderRadius: "10px", padding: "20px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", marginBottom: "15px" }}>
                <PersonAddIcon sx={{ marginRight: "8px" }} />
                <span>Overview</span>
              </Typography>
              <DashboardStats />
            </Box>
          </Grid>
          
          {/* Tickets Chart */}
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: "#2a2a2a", borderRadius: "10px", padding: "20px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", marginBottom: "15px" }}>
                <BarChartIcon sx={{ marginRight: "8px" }} />
                <span>Tickets Overview</span>
              </Typography>
              <TicketsChart />
            </Box>
          </Grid>

          {/* Bookings by Package Type */}
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: "#2a2a2a", borderRadius: "10px", padding: "20px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", marginBottom: "15px" }}>
                <ShoppingCartIcon sx={{ marginRight: "8px" }} />
                <span>Bookings by Package</span>
              </Typography>
              <BookingsByPackageType />
            </Box>
          </Grid>

          {/* New vs Returning Bookings */}
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: "#2a2a2a", borderRadius: "10px", padding: "20px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", marginBottom: "15px" }}>
                <AttachMoneyIcon sx={{ marginRight: "8px" }} />
                <span>New vs Returning Bookings</span>
              </Typography>
              <NewVsReturningBookings />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashbord;
