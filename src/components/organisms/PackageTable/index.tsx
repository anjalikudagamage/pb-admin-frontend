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

const PackageTable = () => {
  const packages = [
    {
      name: "Wedding Package",
      price: "LKR 14,699",
      features: ["2 Hours Session", "20 Edited Photos", "1 Location"],
      guests: 2,
      bedType: "1 extra-large double bed or 2 single beds",
      breakfast: "Non-refundable, Pay in advance",
    },
    {
      name: "Portraits Standards Package",
      price: "LKR 23,500",
      features: ["4 Hours Session", "50 Edited Photos", "2 Locations"],
      guests: 4,
      bedType: "1 extra-large double bed or 2 single beds",
      breakfast: "Non-refundable, 10% Genius discount applied",
    },
    {
      name: "Event Package",
      price: "LKR 14,699",
      features: ["2 Hours Session", "20 Edited Photos", "1 Location"],
      guests: 2,
      bedType: "1 extra-large double bed or 2 single beds",
      breakfast: "Non-refundable, Pay in advance",
    },
    {
      name: "Commercial Package",
      price: "LKR 23,500",
      features: ["4 Hours Session", "50 Edited Photos", "2 Locations"],
      guests: 4,
      bedType: "1 extra-large double bed or 2 single beds",
      breakfast: "Non-refundable, 10% Genius discount applied",
    },
  ];

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
                <Grid container spacing={1}>
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
