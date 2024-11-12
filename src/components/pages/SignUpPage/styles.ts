import { SxProps, Theme } from "@mui/material/styles";

export const formContainer: SxProps = {
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  padding: "30px",
  borderRadius: "10px",
  maxWidth: "700px",
  width: "100%",
  marginTop: "200px",
  marginBottom: "10px",
};

export const formTitle: SxProps = {
  textAlign: "center",
  color: "#fff",
  marginBottom: "20px",
};

export const section: SxProps = {
  marginBottom: "20px",
};

export const sectionTitle: SxProps = {
  marginBottom: "10px",
  color: "#fff",
};

export const textField: SxProps = {
  "& .MuiInputBase-root": {
    color: "#fff",
  },
  "& .MuiFormLabel-root": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },
  },
};

export const buttonContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
};

export const clearButton: SxProps = {
  color: "#fff",
  borderColor: "#fff",
  "&:hover": {
    borderColor: "#fff",
  },
};

export const signUpButtonStyle: SxProps<Theme> = {
  width: "30%",
  backgroundImage: "linear-gradient(90deg, #FF6B6B, #FF6B6B)",
  color: "white",
  padding: "15px 45px",
  textAlign: "center",
  textTransform: "uppercase",
  transition: "0.5s",
  borderRadius: "10px",
  "&:hover": {
    backgroundPosition: "right center",
    color: "#fff",
    textDecoration: "none",
  },
};
