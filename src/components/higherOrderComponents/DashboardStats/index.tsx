import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { cardStyles, iconStyles, valueStyles, labelStyles } from "./styles";

interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  bgColor?: string; // Optional background color
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label, bgColor = "#1976d2" }) => {
  return (
    <Box sx={{ ...cardStyles, backgroundColor: bgColor, color: "white" }}>
      <Box sx={iconStyles}>{icon}</Box>
      <Typography variant="h5" sx={valueStyles}>
        {value}
      </Typography>
      <Typography variant="body2" sx={labelStyles}>
        {label}
      </Typography>
    </Box>
  );
};

const DashboardStats: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard icon={<PeopleIcon />} value="8,267" label="New Users" bgColor="#4caf50" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard icon={<ShoppingCartIcon />} value="200,521" label="Total Orders" bgColor="#2196f3" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard icon={<InventoryIcon />} value="215,542" label="Products Sold" bgColor="#ff9800" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard icon={<AttachMoneyIcon />} value="$677.89" label="This Month" bgColor="#e91e63" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard icon={<StarIcon />} value="1,239" label="Positive Reviews" bgColor="#9c27b0" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard icon={<ThumbUpIcon />} value="89%" label="Customer Satisfaction" bgColor="#3f51b5" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard icon={<TrendingUpIcon />} value="15%" label="Monthly Growth" bgColor="#ff5722" />
      </Grid>
    </Grid>
  );
};

export default DashboardStats;
