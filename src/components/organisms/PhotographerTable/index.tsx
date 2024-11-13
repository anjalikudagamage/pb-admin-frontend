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
  Tooltip,
  IconButton,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import BusinessIcon from "@mui/icons-material/Business";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PackageIcon from "@mui/icons-material/Category";
import SavePopup from "../../layouts/SavePopup";
import {
  container,
  card,
  cardHeader,
  formField,
  actionButtons,
  editButtonStyle,
  saveButtonStyle,
  titleStyle,
  pinkLine,
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
  const [popupOpen, setPopupOpen] = useState(false);

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

    dispatch(updatePhotographer(payload))
      .unwrap()
      .then(() => {
        setPopupOpen(true); 
        dispatch(fetchPhotographerDetails(user.id));
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error during update:", error);
        alert("Failed to update. Please check console for details.");
      });
  };

  return (
    <Box sx={container}>
      <Typography variant="h4" sx={titleStyle}>
        PROFILE EDITOR
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={actionButtons}>
          <Tooltip title={isEditing ? "Cancel Edit" : "Edit"}>
            <IconButton
              onClick={() => setIsEditing(!isEditing)}
              sx={editButtonStyle}
            >
              {isEditing ? <CancelIcon /> : <EditIcon />}
            </IconButton>
          </Tooltip>
          {isEditing && (
            <Tooltip title="Save Changes">
              <Button
                type="submit"
                variant="contained"
                sx={saveButtonStyle}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </Tooltip>
          )}
        </Box>

        {/* Business Information */}
        <Card sx={card}>
          <CardContent>
            <Box sx={cardHeader}>
              <BusinessIcon sx={{ marginRight: "8px" }} />
              <Typography variant="h6">Business Information</Typography>
            </Box>
            <Divider sx={pinkLine} />
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
                        placeholder="Enter business name"
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
                        placeholder="Enter business description"
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
            <Box sx={cardHeader}>
              <ContactMailIcon sx={{ marginRight: "8px" }} />
              <Typography variant="h6">Contact Information</Typography>
            </Box>
            <Divider sx={pinkLine} />
            <Controller
              name="emailAddress"
              control={control}
              render={({ field }) =>
                isEditing ? (
                  <TextField
                    {...field}
                    label="Email Address"
                    placeholder="Enter email address"
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
            <Box sx={cardHeader}>
              <PackageIcon sx={{ marginRight: "8px" }} />
              <Typography variant="h6">Packages Information</Typography>
            </Box>
            <Divider sx={pinkLine} />
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
                              placeholder="Number of photos"
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
                              placeholder="Number of locations"
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
                              placeholder="Package price"
                              fullWidth
                              type="number"
                              sx={formField}
                            />
                          ) : (
                            <Typography>Price: Rs{field.value}</Typography>
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

      {/* Render SavePopup */}
      <SavePopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        message="Your changes have been saved successfully!"
      />
    </Box>
  );
};

export default PhotographerTable;
