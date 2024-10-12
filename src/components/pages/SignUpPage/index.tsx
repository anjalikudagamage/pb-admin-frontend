import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import bgImg from "../../../assets/images/signup/image2.jpg";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  formContainer,
  formTitle,
  section,
  sectionTitle,
  textField,
  buttonContainer,
  submitButton,
  clearButton,
} from "./styles";

const validationSchema = Yup.object().shape({
  studioName: Yup.string().required("Studio Name is required"),
  businessDescription: Yup.string().required("Business Description is required"),
  photographerSkills: Yup.string().required("Photographer Skills Description is required"),
  packages: Yup.array().min(1, "At least one package must be selected"),
});

const packagesOptions = [
  "Wedding Package",
  "Portraits Standard Package",
  "Event Package",
  "Commercial Package",
];

const PhotographerSignupForm: React.FC = () => {
  const initialValues = {
    studioName: "",
    businessDescription: "",
    photographerSkills: "",
    packages: [],
    packageDetails: {},
  };

  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "flex-end",
        height: "auto",
        display: "flex",
        alignItems: "center",
        marginTop: "5px"
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ handleSubmit, handleReset, isSubmitting, errors, touched, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Box sx={formContainer}>
              <Typography variant="h4" sx={formTitle}>
                Photographer Signup Form
              </Typography>

              <Box sx={section}>
                <Typography variant="h6" sx={sectionTitle}>
                  Studio Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="studioName"
                      label="Studio Name"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<ErrorMessage name="studioName" />}
                      error={Boolean(errors.studioName && touched.studioName)}
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
                      error={Boolean(errors.businessDescription && touched.businessDescription)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="photographerSkills"
                      label="Photographer Skills"
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={textField}
                      helperText={<ErrorMessage name="photographerSkills" />}
                      error={Boolean(errors.photographerSkills && touched.photographerSkills)}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box sx={section}>
                <Typography variant="h6" sx={sectionTitle}>
                  Available Packages
                </Typography>
                <FormControl component="fieldset" error={Boolean(errors.packages && touched.packages)}>
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
                            }}
                          />
                        }
                        label={pkg}
                      />
                    ))}
                  </FormGroup>
                  <FormHelperText><ErrorMessage name="packages" /></FormHelperText>
                </FormControl>

                {selectedPackages.map((pkg) => (
                  <Box key={pkg} sx={{ mt: 2 }}>
                    <Typography variant="h6">{pkg} Details</Typography>
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
                          label="Number of Hours"
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
                          as={Select}
                          name={`packageDetails.${pkg}.refundPolicy`}
                          label="Refund Policy"
                          fullWidth
                          sx={textField}
                          displayEmpty
                          inputProps={{ "aria-label": "Refund Policy" }}
                        >
                          <MenuItem value=""><em>Select Refund Policy</em></MenuItem>
                          <MenuItem value="Refundable">Refundable</MenuItem>
                          <MenuItem value="Non-Refundable">Non-Refundable</MenuItem>
                        </Field>
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          as={Select}
                          name={`packageDetails.${pkg}.payment`}
                          label="Payment Option"
                          fullWidth
                          sx={textField}
                          displayEmpty
                          inputProps={{ "aria-label": "Payment Option" }}
                        >
                          <MenuItem value=""><em>Select Payment Option</em></MenuItem>
                          <MenuItem value="Full Payment">Full Payment</MenuItem>
                          <MenuItem value="Pay Advance">Pay Advance</MenuItem>
                          <MenuItem value="No Payment">No Payment</MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </Box>

              <Box sx={buttonContainer}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={submitButton}
                  disabled={isSubmitting}
                >
                  Signup
                </Button>
                <Button
                  type="button"
                  onClick={handleReset}
                  variant="outlined"
                  sx={clearButton}
                >
                  Clear Form
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PhotographerSignupForm;