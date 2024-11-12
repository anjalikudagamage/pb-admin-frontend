import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import CustomPieChart from '../../higherOrderComponents/graph';
import CustomBarChart from '../../higherOrderComponents/graph2';
import CustomBarChart2 from '../../higherOrderComponents/graph3';
import Sidebar from '../../organisms/Sidebar'; // Adjust path if necessary

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={2}>
          
          {/* Left Column */}
          <Grid item xs={12} md={8} container spacing={2} direction="column">
            
            {/* Welcome Card */}
            <Grid item>
              <Card sx={{ backgroundColor: '#fce4ec', borderRadius: '12px', padding: 2, display: 'flex', alignItems: 'center', height: "200px" }}>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    marginRight: 2,
                    backgroundColor: '#ff80ab',
                  }}
                  src="/path/to/user-image.jpg"
                  alt="User Image"
                />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Welcome</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#d81b60' }}>Pablo Nicolus</Typography>
                  <Typography variant="body2" sx={{ color: '#6d6d6d' }}>NY, USA</Typography>
                </Box>
              </Card>
            </Grid>

            {/* Income Variations and Net Income Cards Side by Side */}
            <Grid item>
              <Grid container spacing={2}>
                {/* Income Variations Card */}
                <Grid item xs={6}>
                  <Card sx={{ borderRadius: '12px', padding: 2 }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Income Variations</Typography>
                      <CustomBarChart2 />
                    </CardContent>
                  </Card>
                </Grid>

                {/* Net Income Card */}
                <Grid item xs={6}>
                  <Card sx={{ borderRadius: '12px', padding: 2 }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Net Income</Typography>
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
              <Card sx={{ backgroundColor: '#fffde7', borderRadius: '12px', padding: 2, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffa000' }}>INBOX</Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#ffa000' }}>23</Typography>
              </Card>
            </Grid>

            {/* Sales Card */}
            <Grid item>
              <Card sx={{ borderRadius: '12px', padding: 2, textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Income Variations</Typography>
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

export default Dashboard;

