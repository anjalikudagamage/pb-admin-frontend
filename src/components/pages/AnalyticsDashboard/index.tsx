import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";
import CustomPieChart from "../../higherOrderComponents/PhotographerPerformanceChart";
import CustomBarChart from "../../higherOrderComponents/BookingsByPackageChart";
import CustomBarChart2 from "../../higherOrderComponents/NewVsReturningBookingsChart";
import Sidebar from "../../organisms/Sidebar";

const AnalyticsDashboard: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={2}>
          {/* Left Column */}
          <Grid item xs={12} md={8} container spacing={2} direction="column">
            {/* Analytics Card */}
            <Grid item>
              <Card
                sx={{
                  backgroundColor: "#fce4ec", // Retained light pink background
                  borderRadius: "12px",
                  padding: 2,
                  display: "flex",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    marginRight: 2,
                    backgroundColor: "#ff80ab", // Retained pink avatar background
                  }}
                  src="/path/to/analytics-icon.jpg"
                  alt="Analytics Icon"
                />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Photographer Analytics
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "#d81b60" }} // Retained deep pink text color
                  >
                    Performance Overview
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6d6d6d" }}>
                    Engagement: 75%
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6d6d6d" }}>
                    New Bookings: 12 this month
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6d6d6d" }}>
                    Gallery Views: 1,450
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* Income Variations and Net Income Cards Side by Side */}
            <Grid item>
              <Grid container spacing={2}>
                {/* Income Variations Card */}
                <Grid item xs={6}>
                  <Card sx={{ borderRadius: "12px", padding: 2 }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Income Variations
                      </Typography>
                      <CustomBarChart2 />
                    </CardContent>
                  </Card>
                </Grid>

                {/* Net Income Card */}
                <Grid item xs={6}>
                  <Card sx={{ borderRadius: "12px", padding: 2 }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Net Income
                      </Typography>
                      <CustomBarChart />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4} container spacing={2} direction="column">
            {/* Inbox Card */}
            <Grid item>
              <Card
                sx={{
                  backgroundColor: "#fffde7",
                  borderRadius: "12px",
                  padding: 2,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#ffa000" }}
                >
                  INBOX
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "#ffa000" }}
                >
                  23
                </Typography>
              </Card>
            </Grid>

            {/* Sales Card */}
            <Grid item>
              <Card
                sx={{ borderRadius: "12px", padding: 2, textAlign: "center" }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Income Variations
                  </Typography>
                  <CustomPieChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AnalyticsDashboard;
