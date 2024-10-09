import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "../../organisms/adminNavbar";
import DashboardStats from "../../higherOrderComponents/DashboardStats";
import UserTable from "../../higherOrderComponents/UserTable";

const AdminDashboard: React.FC = () => {
  return (
    <Box>
      {/* Navbar */}
      <Navbar />

      <Container>
        {/* Page Header */}
        <Typography variant="h4" sx={{ fontWeight: "bold", my: 4 }}>
          Admin Dashboard
        </Typography>

        {/* Dashboard Stats Section */}
        <Box sx={{ mb: 5 }}>
          <DashboardStats />
        </Box>

        {/* User Table Section */}
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
          Users
        </Typography>
        <UserTable />
      </Container>
    </Box>
  );
};

export default AdminDashboard;
