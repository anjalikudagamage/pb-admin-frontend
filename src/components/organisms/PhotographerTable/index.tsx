import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Grid, Button, Typography, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  container,
  row,
  headerCell,
  cell,
  packageHeader,
  packageCell,
  actionRow,
  actionCell,
  actionButton,
} from "./styles";

// Mock data for the photographer details and packages
const photographerData = {
  businessName: "Dream Weddings Photography",
  businessDescription: "Capturing beautiful moments on your special day.",
  emailAddress: "contact@dreamweddings.com",
  password: "********",
  packages: [
    {
      name: "Wedding Package",
      details: {
        photos: "200 photos",
        locations: "2 locations",
        price: "$1500",
      },
    },
    {
      name: "Portrait Standard Package",
      details: {
        photos: "100 photos",
        locations: "1 location",
        price: "$800",
      },
    },
    {
      name: "Event Package",
      details: {
        photos: "150 photos",
        locations: "3 locations",
        price: "$1200",
      },
    },
    {
      name: "Commercial Package",
      details: {
        photos: "300 photos",
        locations: "Multiple locations",
        price: "$2000",
      },
    },
  ],
};

const PhotographerTable: React.FC = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: photographerData,
  });
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = (data: any) => {
    console.log("Updated Data:", data);
    setIsEditing(false);
  };

  return (
    <Box sx={container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Action buttons row */}
        <Grid container sx={actionRow}>
          <Grid item xs={4} />
          <Grid item xs={8} sx={actionCell}>
            <Button
              variant="contained"
              color="primary"
              sx={actionButton}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? <SaveIcon /> : <EditIcon />}
              {isEditing ? "Save" : "Edit"}
            </Button>
            {isEditing && (
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={actionButton}
              >
                Save Changes
              </Button>
            )}
          </Grid>
        </Grid>

        {/* Header rows */}
        <Grid container sx={row}>
          <Grid item xs={4} sx={headerCell}>
            Business Name
          </Grid>
          <Grid item xs={8} sx={cell}>
            <Controller
              name="businessName"
              control={control}
              render={({ field }) =>
                isEditing ? (
                  <TextField {...field} fullWidth />
                ) : (
                  <Typography>{field.value}</Typography>
                )
              }
            />
          </Grid>
        </Grid>
        <Grid container sx={row}>
          <Grid item xs={4} sx={headerCell}>
            Business Description
          </Grid>
          <Grid item xs={8} sx={cell}>
            <Controller
              name="businessDescription"
              control={control}
              render={({ field }) =>
                isEditing ? (
                  <TextField {...field} fullWidth />
                ) : (
                  <Typography>{field.value}</Typography>
                )
              }
            />
          </Grid>
        </Grid>
        <Grid container sx={row}>
          <Grid item xs={4} sx={headerCell}>
            Email Address
          </Grid>
          <Grid item xs={8} sx={cell}>
            <Controller
              name="emailAddress"
              control={control}
              render={({ field }) =>
                isEditing ? (
                  <TextField {...field} fullWidth />
                ) : (
                  <Typography>{field.value}</Typography>
                )
              }
            />
          </Grid>
        </Grid>

        {/* Package header */}
        <Grid container sx={row}>
          <Grid item xs={12} sx={packageHeader}>
            Packages
          </Grid>
        </Grid>

        {/* Package rows with details */}
        {photographerData.packages.map((pkg, index) => (
          <Grid container key={index} sx={row}>
            <Grid item xs={4} sx={headerCell}>
              {pkg.name}
            </Grid>
            <Grid item xs={8} sx={packageCell}>
              <Typography>Photos:</Typography>
              <Controller
                name={`packages[${index}].details.photos` as any} // Cast to `any`
                control={control}
                render={({ field }) =>
                  isEditing ? (
                    <TextField {...field} fullWidth />
                  ) : (
                    <Typography>{field.value}</Typography>
                  )
                }
              />
              <Typography>Locations:</Typography>
              <Controller
                name={`packages[${index}].details.locations` as any}
                control={control}
                render={({ field }) =>
                  isEditing ? (
                    <TextField {...field} fullWidth />
                  ) : (
                    <Typography>{field.value}</Typography>
                  )
                }
              />
              <Typography>Price:</Typography>
              <Controller
                name={`packages[${index}].details.price` as any}
                control={control}
                render={({ field }) =>
                  isEditing ? (
                    <TextField {...field} fullWidth />
                  ) : (
                    <Typography>{field.value}</Typography>
                  )
                }
              />
            </Grid>
          </Grid>
        ))}

        {/* Password row */}
        <Grid container sx={row}>
          <Grid item xs={4} sx={headerCell}>
            Password
          </Grid>
          <Grid item xs={8} sx={cell}>
            <Controller
              name="password"
              control={control}
              render={({ field }) =>
                isEditing ? (
                  <TextField {...field} fullWidth type="password" />
                ) : (
                  <Typography>{field.value}</Typography>
                )
              }
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default PhotographerTable;
