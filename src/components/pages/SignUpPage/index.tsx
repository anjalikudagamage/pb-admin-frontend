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
import bgImg from "../../../assets/images/signup/image2.jpg";
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

  // Redux-related states
  const dispatch: AppDispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.auth);

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
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "flex-end",
        display: "flex",
        alignItems: "center",
        marginTop: "5px",
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
        {({ handleSubmit, handleReset, errors, touched, setFieldValue }) => (
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
                      helperText={<ErrorMessage name="businessDescription" />}
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
                                : selectedPackages.filter((p) => p !== pkg);
                              setSelectedPackages(newSelection);
                              setFieldValue("packages", newSelection);
                              // Reset package details when unchecked
                              if (!e.target.checked) {
                                setFieldValue(`packageDetails.${pkg}`, {}); // Clear details for unchecked package
                              }
                            }}
                            sx={{
                              color: "white",
                              "&.Mui-checked": { color: "white" },
                            }}
                          />
                        }
                        label={
                          <Typography sx={{ color: "white" }}>{pkg}</Typography>
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
  );
};

export default SignUpPage;
