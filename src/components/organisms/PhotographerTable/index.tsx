import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  fetchPhotographerDetails,
  updatePhotographer,
} from "../../../redux/actions/photographerActions";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import {
  container,
  card,
  cardHeader,
  formField,
  actionButtons,
  editButtonStyle,
  saveButtonStyle,
} from "./styles";

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
    if (user && user.id) {
      dispatch(fetchPhotographerDetails(user.id));
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (photographerDetails) {
      setValue("businessName", photographerDetails.businessName || "");
      setValue(
        "businessDescription",
        photographerDetails.businessDescription || ""
      );
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

    // Construct payload with packageDetails as a flat string for each package
    const payload = {
      id: user.id,
      businessName: data.businessName,
      businessDescription: data.businessDescription,
      email: data.emailAddress,
      password: data.password,
      packageDetails: data.packages.reduce((acc, pkg) => {
        const photos = pkg.details.photos || 0;
        const locations = pkg.details.locations || 0;
        const price = pkg.details.price || 0;
        acc[
          pkg.name
        ] = `photos: ${photos}, locations: ${locations}, price: ${price}`;
        return acc;
      }, {} as Record<string, string>),
    };

    console.log(
      "Attempting to dispatch updatePhotographer with payload:",
      payload
    ); // Debugging log

    // Dispatch update and provide feedback
    dispatch(updatePhotographer(payload))
      .unwrap()
      .then(() => {
        console.log("Update successful!"); // Log for success
        alert("Update successful!"); // Temporary feedback
        dispatch(fetchPhotographerDetails(user.id));
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error during update:", error); // Log for error
        alert("Failed to update. Please check console for details."); // Temporary feedback
      });
  };

  return (
    <Box sx={container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={actionButtons}>
          <Button
            onClick={() => setIsEditing(!isEditing)}
            variant="contained"
            sx={editButtonStyle}
          >
            {isEditing ? "Cancel" : "Edit"}
          </Button>
          {isEditing && (
            <Button type="submit" variant="contained" sx={saveButtonStyle}>
              Save
            </Button>
          )}
        </Box>

        {/* Business Information */}
        <Card sx={card}>
          <CardContent>
            <Typography sx={cardHeader}>Business Information</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="businessName"
                  control={control}
                  render={({ field }) =>
                    isEditing ? (
                      <TextField
                        {...field}
                        label="Business Name"
                        fullWidth
                        sx={formField}
                      />
                    ) : (
                      <Typography variant="h6">{field.value}</Typography>
                    )
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="businessDescription"
                  control={control}
                  render={({ field }) =>
                    isEditing ? (
                      <TextField
                        {...field}
                        label="Description"
                        fullWidth
                        multiline
                        sx={formField}
                      />
                    ) : (
                      <Typography>{field.value}</Typography>
                    )
                  }
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card sx={card}>
          <CardContent>
            <Typography sx={cardHeader}>Contact Information</Typography>
            <Controller
              name="emailAddress"
              control={control}
              render={({ field }) =>
                isEditing ? (
                  <TextField
                    {...field}
                    label="Email Address"
                    fullWidth
                    sx={formField}
                  />
                ) : (
                  <Typography>{field.value}</Typography>
                )
              }
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) =>
                isEditing ? (
                  <TextField
                    {...field}
                    label="Password"
                    fullWidth
                    type="password"
                    sx={formField}
                  />
                ) : (
                  <Typography>{field.value}</Typography>
                )
              }
            />
          </CardContent>
        </Card>

        {/* Package Details */}
        <Card sx={card}>
          <CardContent>
            <Typography sx={cardHeader}>Packages Information</Typography>
            {Array.isArray(photographerDetails?.packages) &&
            photographerDetails.packages.length > 0 ? (
              photographerDetails.packages.map((pkg, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6" color="primary">
                    {pkg.name}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Controller
                        name={`packages.${index}.details.photos`}
                        control={control}
                        render={({ field }) =>
                          isEditing ? (
                            <TextField
                              {...field}
                              label="Photos"
                              fullWidth
                              type="number"
                              sx={formField}
                            />
                          ) : (
                            <Typography>Photos: {field.value}</Typography>
                          )
                        }
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Controller
                        name={`packages.${index}.details.locations`}
                        control={control}
                        render={({ field }) =>
                          isEditing ? (
                            <TextField
                              {...field}
                              label="Locations"
                              fullWidth
                              type="number"
                              sx={formField}
                            />
                          ) : (
                            <Typography>Locations: {field.value}</Typography>
                          )
                        }
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Controller
                        name={`packages.${index}.details.price`}
                        control={control}
                        render={({ field }) =>
                          isEditing ? (
                            <TextField
                              {...field}
                              label="Price"
                              fullWidth
                              type="number"
                            />
                          ) : (
                            <Typography>Price: Rs.{field.value}</Typography>
                          )
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>
              ))
            ) : (
              <Typography>No packages available.</Typography>
            )}
          </CardContent>
        </Card>
      </form>
    </Box>
  );
};

export default PhotographerTable;
