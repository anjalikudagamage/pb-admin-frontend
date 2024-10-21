import React from "react";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { packageTableStyles, BookButton } from "./styles";
import { useNavigate } from "react-router-dom";

interface Package {
  name: string;
  price: string;
  features: string[];
}

interface PackageTableProps {
  packages: Package[];
}

const PackageTable: React.FC<PackageTableProps> = ({ packages }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/booking");
  };

  return (
    <Box sx={packageTableStyles.root}>
      <Grid container spacing={2}>
        {packages.map((pkg, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={packageTableStyles.card}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={packageTableStyles.packageName}>
                  {pkg.name}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6} sx={{ marginBottom: 2 }}>
                    <Typography variant="body2" color="textSecondary" sx={packageTableStyles.featureText}>
                      <PhotoCameraIcon fontSize="small" sx={{ marginRight: 1 }} />
                      Number of photos:
                    </Typography>
                    <Typography variant="body1" sx={{ marginLeft: 4 }}>
                      {pkg.features[1]}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sx={{ marginBottom: 2 }}>
                    <Typography variant="body2" color="textSecondary" sx={packageTableStyles.featureText}>
                      <ScheduleIcon fontSize="small" sx={{ marginRight: 1 }} />
                      Number of hours:
                    </Typography>
                    <Typography variant="body1" sx={{ marginLeft: 4 }}>
                      {pkg.features[0]}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary" sx={packageTableStyles.featureText}>
                      <LocationOnIcon fontSize="small" sx={{ marginRight: 1 }} />
                      Number of locations:
                    </Typography>
                    <Typography variant="body1" sx={{ marginLeft: 4 }}>
                      {pkg.features[2]}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Package price:
                    </Typography>
                    <Typography variant="h6" sx={packageTableStyles.packagePrice}>
                      {pkg.price}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button variant="contained" sx={BookButton} onClick={handleClick}>
                  Book Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PackageTable;
