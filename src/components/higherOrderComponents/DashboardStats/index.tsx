import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { cardStyles, iconStyles } from "./styles";

interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label }) => {
  return (
    <Box sx={cardStyles}>
      <Box sx={iconStyles}>{icon}</Box>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {value}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {label}
      </Typography>
    </Box>
  );
};

const DashboardStats: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard icon={<PeopleIcon />} value="8,267" label="New Users" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard
          icon={<ShoppingCartIcon />}
          value="200,521"
          label="Total Orders"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard
          icon={<InventoryIcon />}
          value="215,542"
          label="Products Sell"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard
          icon={<AttachMoneyIcon />}
          value="$677.89"
          label="This Month"
        />
      </Grid>
    </Grid>
  );
};

export default DashboardStats;