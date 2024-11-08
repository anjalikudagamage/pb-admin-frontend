import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { fetchPhotographerDetails, updatePhotographer } from "../../../redux/actions/photographerActions";
import { useForm, Controller } from "react-hook-form";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { container, row, headerCell, cell, packageHeader, packageCell } from "./styles";

interface Package {
  name: string;
  details: {
    photos: number;
    locations: number;
    price: number;
  };
}

interface PhotographerData {
  businessName: string;
  businessDescription: string;
  emailAddress: string;
  password: string;
  packages: Package[];
}

const PhotographerTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.photographer.user);
  const photographerDetails = useSelector(
    (state: RootState) => state.photographer.photographerDetails
  );

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user && user.id) {
      dispatch(fetchPhotographerDetails(user.id));
    }
  }, [user, dispatch]);

  const { control, handleSubmit, setValue } = useForm<PhotographerData>({
    defaultValues: {
      businessName: "",
      businessDescription: "",
      emailAddress: "",
      password: "",
      packages: [],
    },
  });

  useEffect(() => {
    if (photographerDetails) {
      setValue("businessName", photographerDetails.businessName || "");
      setValue("businessDescription", photographerDetails.businessDescription || "");
      setValue("emailAddress", user?.email || "");
      setValue("password", user?.password || "********");
      setValue("packages", photographerDetails.packages || []);
    }
  }, [photographerDetails, user, setValue]);

  const onSubmit = (data: PhotographerData) => {
    if (!user) {
      console.error("User is not logged in.");
      return;
    }

    const payload = {
      id: user.id,
      businessName: data.businessName,
      businessDescription: data.businessDescription,
      email: data.emailAddress,
      password: data.password,
      packageDetails: data.packages.reduce((acc, pkg) => {
        acc[pkg.name] = {
          photos: pkg.details.photos,
          locations: pkg.details.locations,
          price: pkg.details.price,
        };
        return acc;
      }, {} as Record<string, { photos: number; locations: number; price: number }>),
    };

    dispatch(updatePhotographer(payload)).then(() => {
      dispatch(fetchPhotographerDetails(user.id));
    });

    setIsEditing(false);
  };

  return (
    <Box sx={container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Action buttons row */}
        <Grid container justifyContent="flex-end">
          <Button onClick={() => setIsEditing(!isEditing)} variant="contained" color="primary">
            {isEditing ? "Cancel" : "Edit"}
          </Button>
          {isEditing && (
            <Button type="submit" variant="contained" color="secondary" sx={{ ml: 2 }}>
              Save
            </Button>
          )}
        </Grid>

        {/* Business Name */}
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

        {/* Business Description */}
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

        {/* Email Address */}
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

        {/* Package Header */}
        <Grid container sx={row}>
          <Grid item xs={12} sx={packageHeader}>
            Packages
          </Grid>
        </Grid>

        {/* Package Rows */}
        {Array.isArray(photographerDetails?.packages) && photographerDetails.packages.length > 0 ? (
          photographerDetails.packages.map((pkg, index) => (
            <Grid container key={index} sx={row}>
              <Grid item xs={4} sx={headerCell}>
                {pkg.name}
              </Grid>
              <Grid item xs={8} sx={packageCell}>
                <Typography>Photos:</Typography>
                <Controller
                  name={`packages.${index}.details.photos`}
                  control={control}
                  render={({ field }) =>
                    isEditing ? (
                      <TextField {...field} fullWidth type="number" />
                    ) : (
                      <Typography>{field.value}</Typography>
                    )
                  }
                />
                <Typography>Locations:</Typography>
                <Controller
                  name={`packages.${index}.details.locations`}
                  control={control}
                  render={({ field }) =>
                    isEditing ? (
                      <TextField {...field} fullWidth type="number" />
                    ) : (
                      <Typography>{field.value}</Typography>
                    )
                  }
                />
                <Typography>Price:</Typography>
                <Controller
                  name={`packages.${index}.details.price`}
                  control={control}
                  render={({ field }) =>
                    isEditing ? (
                      <TextField {...field} fullWidth type="number" />
                    ) : (
                      <Typography>{field.value}</Typography>
                    )
                  }
                />
              </Grid>
            </Grid>
          ))
        ) : (
          <Typography>No packages available.</Typography>
        )}

        {/* Password Row */}
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
