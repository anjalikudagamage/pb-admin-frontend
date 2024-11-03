import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import bgImg from "../../../assets/images/signup/image3.jpg";
import {
  formContainer,
  formTitle,
  section,
  sectionTitle,
  textField,
  buttonContainer,
  clearButton,
  signUpButtonStyle,
} from "./styles";
import SignupPopup from "../../layouts/SignupPopup";
import { AppDispatch } from "../../../redux/store";
import { photographerSignup } from "../../../redux/actions/photographerActions";
import { RootState } from "../../../redux/store";
import { AccessTime, Build, CameraAlt, Payment } from "@mui/icons-material";

interface FormValues {
  businessName: string;
  businessDescription: string;
  email: string;
  packages: string[];
  packageDetails: Record<
    string,
    { photos?: number; hours?: number; locations?: number; price?: number }
  >;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  businessName: Yup.string().required("Business Name is required"),
  businessDescription: Yup.string().required(
    "Business Description is required"
  ),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  packages: Yup.array().min(1, "At least one package must be selected"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const packagesOptions = [
  "Wedding Package",
  "Portraits Standard Package",
  "Event Package",
  "Commercial Package",
];

const SignUpPage: React.FC = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);

  const dispatch: AppDispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.photographer);

  const initialValues: FormValues = {
    businessName: "",
    businessDescription: "",
    email: "",
    packages: [],
    packageDetails: {},
    password: "",
    confirmPassword: "",
  };

  return (
    <>
      <Grid
        container
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "128vh",
          width: "100vw",
          color: "white",
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            padding: "2rem",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1.5rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "8px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Typography variant="h3" gutterBottom>
            <strong>Join Our Network of Top Photographers</strong>
          </Typography>
          <Typography variant="h6" gutterBottom>
            Showcase Your Skills, Attract Clients, and Grow Your Business
          </Typography>
          <Box display="flex" alignItems="center" gap="0.5rem">
            <CameraAlt fontSize="large" sx={{ color: "#00e5ff" }} />
            <Typography variant="body1">
              <strong>Create Your Portfolio</strong>: Highlight your unique
              style and showcase your best work to connect with clients.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="0.5rem">
            <Build fontSize="large" sx={{ color: "#00e5ff" }} />{" "}
            {/* Added icon here */}
            <Typography variant="body1">
              <strong>Offer Custom Packages</strong>: Design packages that match
              different client needs, from events to personal shoots.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="0.5rem">
            <AccessTime fontSize="large" sx={{ color: "#00e5ff" }} />
            <Typography variant="body1">
              <strong>Flexible Scheduling</strong>: Set your availability to fit
              client bookings with ease.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="0.5rem">
            <Payment fontSize="large" sx={{ color: "#00e5ff" }} />
            <Typography variant="body1">
              <strong>Secure Payments</strong>: Receive payments after each
              session with our secure payment system.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box
            sx={{
              justifyContent: "flex-end",
              height: "100vh",
              display: "flex",
              paddingRight: "40px",
              alignItems: "center",
            }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (
                values: FormValues,
                { resetForm }: FormikHelpers<FormValues>
              ) => {
                console.log("Form Values:", values);
                try {
                  // Constructing packageDetails correctly
                  const packageDetails = selectedPackages.reduce((acc, pkg) => {
                    const { photos, hours, locations, price } =
                      values.packageDetails[pkg] || {};
                    acc[
                      pkg
                    ] = `photos: ${photos}, hours: ${hours}, locations: ${locations}, price: ${price}`;
                    return acc;
                  }, {} as Record<string, string>);

                  // Dispatching the signup action
                  const payload = {
                    businessName: values.businessName,
                    businessDescription: values.businessDescription,
                    email: values.email,
                    password: values.password,
                    packageDetails,
                  };

                  await dispatch(photographerSignup(payload)).unwrap();
                  resetForm();
                  setSelectedPackages([]); // Clear selected packages
                  setOpenPopup(true); // Open success popup
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {({
                handleSubmit,
                handleReset,
                errors,
                touched,
                setFieldValue,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Box sx={formContainer}>
                    <Typography variant="h4" sx={formTitle}>
                      Photographer Signup Form
                    </Typography>

                    {/* Business/Service Details Section */}
                    <Box sx={section}>
                      <Typography variant="h6" sx={sectionTitle}>
                        Business/Service Details
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            name="businessName"
                            label="Business Name"
                            fullWidth
                            variant="outlined"
                            sx={textField}
                            helperText={<ErrorMessage name="businessName" />}
                            error={Boolean(
                              errors.businessName && touched.businessName
                            )}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            name="businessDescription"
                            label="Business Description"
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            sx={textField}
                            helperText={
                              <ErrorMessage name="businessDescription" />
                            }
                            error={Boolean(
                              errors.businessDescription &&
                                touched.businessDescription
                            )}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="outlined"
                            sx={textField}
                            helperText={<ErrorMessage name="email" />}
                            error={Boolean(errors.email && touched.email)}
                          />
                        </Grid>
                      </Grid>
                    </Box>

                    {/* Available Packages Section */}
                    <Box sx={section}>
                      <Typography variant="h6" sx={sectionTitle}>
                        Available Packages
                      </Typography>
                      <FormControl
                        component="fieldset"
                        error={Boolean(errors.packages && touched.packages)}
                      >
                        <FormGroup row>
                          {packagesOptions.map((pkg) => (
                            <FormControlLabel
                              key={pkg}
                              control={
                                <Checkbox
                                  name="packages"
                                  value={pkg}
                                  checked={selectedPackages.includes(pkg)}
                                  onChange={(e) => {
                                    const newSelection = e.target.checked
                                      ? [...selectedPackages, pkg]
                                      : selectedPackages.filter(
                                          (p) => p !== pkg
                                        );
                                    setSelectedPackages(newSelection);
                                    setFieldValue("packages", newSelection);
                                    // Reset package details when unchecked
                                    if (!e.target.checked) {
                                      setFieldValue(
                                        `packageDetails.${pkg}`,
                                        {}
                                      ); // Clear details for unchecked package
                                    }
                                  }}
                                  sx={{
                                    color: "white",
                                    "&.Mui-checked": { color: "white" },
                                  }}
                                />
                              }
                              label={
                                <Typography sx={{ color: "white" }}>
                                  {pkg}
                                </Typography>
                              }
                            />
                          ))}
                        </FormGroup>
                        <FormHelperText>
                          <ErrorMessage name="packages" />
                        </FormHelperText>
                      </FormControl>

                      {/* Package Details */}
                      {selectedPackages.map((pkg) => (
                        <Box key={pkg} sx={{ mt: 2 }}>
                          <Typography variant="h6" sx={{ color: "white" }}>
                            {pkg} Details
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <Field
                                as={TextField}
                                name={`packageDetails.${pkg}.photos`}
                                label="Number of Edited Photos"
                                type="number"
                                fullWidth
                                sx={textField}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Field
                                as={TextField}
                                name={`packageDetails.${pkg}.hours`}
                                label="Duration (Hours)"
                                type="number"
                                fullWidth
                                sx={textField}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Field
                                as={TextField}
                                name={`packageDetails.${pkg}.locations`}
                                label="Number of Locations"
                                type="number"
                                fullWidth
                                sx={textField}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Field
                                as={TextField}
                                name={`packageDetails.${pkg}.price`}
                                label="Price"
                                type="number"
                                fullWidth
                                sx={textField}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      RS
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      ))}
                    </Box>

                    {/* Password Section */}
                    <Box sx={section}>
                      <Typography variant="h6" sx={sectionTitle}>
                        Password
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            sx={textField}
                            helperText={<ErrorMessage name="password" />}
                            error={Boolean(errors.password && touched.password)}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            sx={textField}
                            helperText={<ErrorMessage name="confirmPassword" />}
                            error={Boolean(
                              errors.confirmPassword && touched.confirmPassword
                            )}
                          />
                        </Grid>
                      </Grid>
                    </Box>

                    {/* Buttons Section */}
                    <Box sx={buttonContainer}>
                      <Button
                        type="button"
                        onClick={handleReset}
                        variant="outlined"
                        sx={clearButton}
                      >
                        Clear
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={signUpButtonStyle}
                        disabled={isLoading}
                      >
                        {isLoading ? <CircularProgress size={24} /> : "Sign Up"}
                      </Button>
                    </Box>
                  </Box>
                </Form>
              )}
            </Formik>
            <SignupPopup open={openPopup} onClose={() => setOpenPopup(false)} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUpPage;
