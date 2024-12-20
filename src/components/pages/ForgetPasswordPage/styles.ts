import { SxProps, Theme } from "@mui/material";

export const containerStyle: SxProps<Theme> = {
  display: "flex",
  height: "100vh",
  backgroundColor: "white",
  flexDirection: { xs: "column", md: "row" },
};

export const imageBoxStyle: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 4,
  background: "url(/path-to-your-image.jpg) no-repeat center center",
  backgroundSize: "cover",
  color: "#fff",
};

export const buttonStyle: SxProps<Theme> = {
  backgroundColor: "#FF6B6B",
  color: "#fff",
  maxWidth: "180px",
  padding: "8px 32px",
  backgroundImage: "linear-gradient(90deg, #FF6B6B, #FF6B6B)",
  textAlign: "center",
  textTransform: "uppercase",
  transition: "0.5s",
  backgroundSize: "200% auto",
  borderRadius: "10px",
  "&:hover": {
    backgroundPosition: "right center",
    color: "#fff",
    textDecoration: "none",
  },
};

export const formBoxStyle: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 4,
  backgroundColor: "#FFCBCB",
  borderRadius: 2,
  margin: 4,
  marginTop: "100px",
  backdropFilter: "blur(10px)",
};

export const titleStyle: SxProps<Theme> = {
  color: "black",
  mb: 4,
  fontWeight: 600,
};

export const inputFieldStyle: SxProps<Theme> = {
  marginBottom: "20px",
  borderRadius: "10px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#ff7a7f",
    },
  },
  "& .MuiInputLabel-root": {
    color: "black",
  },
  "& .MuiInputBase-input": {
    color: "black",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "black",
  },
};

export const signUpButtonStyle: SxProps<Theme> = {
  width: "100%",
  backgroundImage: "linear-gradient(90deg, #FF6B6B, #FF6B6B)",
  color: "white",
  padding: "15px 45px",
  textAlign: "center",
  textTransform: "uppercase",
  transition: "0.5s",
  backgroundSize: "200% auto",
  boxShadow: "0 0 8px #eee",
  borderRadius: "10px",
  "&:hover": {
    backgroundPosition: "right center",
    color: "#fff",
    textDecoration: "none",
  },
};

export const headingStyle: SxProps<Theme> = {
  fontWeight: 700,
  mb: 5,
};

export const bodyStyle: SxProps<Theme> = {
  mb: 12,
  paddingRight: "50px",
};

export const linkStyle: SxProps<Theme> = {
  color: "#FF6B6B",
  textDecoration: "none",
  fontWeight: "bold",
  "&:hover": {
    color: "#FF4757",
  },
};