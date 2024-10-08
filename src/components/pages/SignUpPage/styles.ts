import { SxProps } from "@mui/material/styles";

export const formContainer: SxProps = {
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  padding: "30px",
  borderRadius: "10px",
  maxWidth: "700px",
  width: "100%",
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
  color: "#00bcd4",
  marginBottom: "10px",
};

export const textField: SxProps = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#00bcd4",
    },
    "&:hover fieldset": {
      borderColor: "#00e5ff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00e5ff",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#00bcd4",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#00e5ff",
  },
  "& input": {
    color: "#fff", 
  },
};

export const fareLabel: SxProps = {
  color: "#00bcd4",
};

export const buttonContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
};

export const submitButton: SxProps = {
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

export const clearButton: SxProps = {
  borderColor: "#00bcd4",
  color: "#00bcd4",
  "&:hover": {
    borderColor: "#00e5ff",
    color: "#00e5ff",
  },
};
