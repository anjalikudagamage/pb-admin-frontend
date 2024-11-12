import React from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import backgroundImage from "../../../assets/images/signup/image3.jpg";
import {
  containerStyle,
  imageBoxStyle,
  formBoxStyle,
  titleStyle,
  inputFieldStyle,
  signUpButtonStyle,
  headingStyle,
  bodyStyle,
  linkStyle,
} from "./styles";
import Navbar from "../../organisms/Navbar";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const ForgotPasswordPage: React.FC = () => {
  const handleSubmit = (values: { email: string }) => {
    console.log("Submitted email:", values.email);
  };

  return (
    <>
      <Navbar />
      <Box sx={containerStyle}>
        <Box
          sx={{
            ...imageBoxStyle,
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <Typography variant="h3" sx={headingStyle}>
            FORGOT YOUR PASSWORD?
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Don't worry, it happens to the best of us! Enter your email below,
            and we'll send you a link to reset your password.
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Remember your password?{" "}
            <Link href="/login" sx={linkStyle}>
              Login here
            </Link>
          </Typography>
        </Box>

        <Box sx={formBoxStyle}>
          <Typography variant="h4" sx={titleStyle}>
            Reset Your Password
          </Typography>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ touched, errors }) => (
              <Form>
                <Field
                  name="email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  sx={inputFieldStyle}
                  helperText={<ErrorMessage name="email" />}
                  error={touched.email && !!errors.email}
                />
                <Button type="submit" sx={signUpButtonStyle}>
                  Send Reset Link
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
};

export default ForgotPasswordPage;
