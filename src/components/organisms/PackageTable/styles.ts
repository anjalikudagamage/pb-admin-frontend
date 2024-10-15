import { SxProps, Theme } from "@mui/material";

export const packageTableStyles: Record<string, SxProps<Theme>> = {
  root: {
    flexGrow: 1,
    padding: 10,
  },
};

export const BookButton: SxProps<Theme> = {
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