import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import bgImg from "../../../assets/images/signup/image2.jpg";
import {
  Box,
  Button,
  Grid,
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
  shopName: Yup.string().required("Shop/Studio Name is required"),
  shopDescription: Yup.string().required("Description is required"),
  ownerInfo: Yup.string().required("Owner Information is required"),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .required("Phone Number is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
});

const PhotographerSignupForm: React.FC = () => {
  const initialValues = {
    shopName: "",
    shopDescription: "",
    ownerInfo: "",
    address: "",
    phoneNumber: "",
    email: "",
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "150vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        {({ handleSubmit, handleReset, isSubmitting, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <Box sx={formContainer}>
              <Typography variant="h4" sx={formTitle}>
                Photographer Signup Form
              </Typography>

              <Box sx={section}>
                <Typography variant="h6" sx={sectionTitle}>
                  Shop/Studio Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="shopName"
                      label="Shop/Studio Name"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<ErrorMessage name="shopName" />}
                      error={Boolean(errors.shopName && touched.shopName)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="shopDescription"
                      label="Shop Description"
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={textField}
                      helperText={<ErrorMessage name="shopDescription" />}
                      error={Boolean(errors.shopDescription && touched.shopDescription)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="ownerInfo"
                      label="About the Owner"
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={textField}
                      helperText={<ErrorMessage name="ownerInfo" />}
                      error={Boolean(errors.ownerInfo && touched.ownerInfo)}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box sx={section}>
                <Typography variant="h6" sx={sectionTitle}>
                  Contact Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="address"
                      label="Address"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<ErrorMessage name="address" />}
                      error={Boolean(errors.address && touched.address)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="phoneNumber"
                      label="Phone Number"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<ErrorMessage name="phoneNumber" />}
                      error={Boolean(errors.phoneNumber && touched.phoneNumber)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="email"
                      label="Email"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<ErrorMessage name="email" />}
                      error={Boolean(errors.email && touched.email)}
                    />
                  </Grid>
                </Grid>
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
