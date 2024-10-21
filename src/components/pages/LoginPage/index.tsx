import React from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import backgroundImage from "../../../assets/images/signup/image1.jpg";
import {
  containerStyle,
  imageBoxStyle,
  buttonStyle,
  formBoxStyle,
  titleStyle,
  inputFieldStyle,
  signUpButtonStyle,
  headingStyle,
  bodyStyle,
  linkStyle,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { photographerLogin } from "../../../redux/actions/photographerActions";
import { RootState, AppDispatch } from "../../../redux/store";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // Fix: Properly type the state from useSelector
  const { isLoading, error } = useSelector(
    (state: RootState) => state.photographer
  );

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await dispatch(photographerLogin(values)).unwrap();
      navigate("/photographer");
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleClick = () => {
    navigate("/signup");
  };

  const handleForgotPasswordClick = () => {
    navigate("/password");
  };

  return (
    <Box sx={containerStyle}>
      <Box
        sx={{
          ...imageBoxStyle,
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Typography variant="h3" sx={headingStyle}>
          WELCOME BACK TO CLICKBOOKER
        </Typography>
        <Typography variant="body1" sx={bodyStyle}>
          New here?{" "}
          <Link href="/signup" sx={linkStyle} onClick={handleClick}>
            Create an account
          </Link>
        </Typography>
        <Typography variant="body2" sx={bodyStyle}>
          Log in to your account to access all the features of our platform.
          Connect with photographers, book your next session, or manage your
          profile—all in one place.
        </Typography>
        <Button sx={buttonStyle}>Learn More</Button>
      </Box>

      <Box sx={formBoxStyle}>
        <Typography variant="h4" sx={titleStyle}>
          Login to Your Account
        </Typography>
        {error && <Typography color="error">{error}</Typography>}{" "}
        {/* Error display */}
        {/* Formik form with validation */}
        <Formik
          initialValues={{ email: "", password: "" }}
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
              <Field
                name="password"
                as={TextField}
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                sx={inputFieldStyle}
                helperText={<ErrorMessage name="password" />}
                error={touched.password && !!errors.password}
              />
              <Link
                sx={linkStyle}
                onClick={handleForgotPasswordClick}
                style={{ marginBottom: "16px", display: "block" }}
              >
                Forgot Password?
              </Link>
              <Button type="submit" sx={signUpButtonStyle} disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default LoginPage;
