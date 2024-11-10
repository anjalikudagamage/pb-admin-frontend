// popupStyles.ts
import { SxProps, Theme } from "@mui/system";

export const dialog: SxProps<Theme> = {
  ".MuiDialog-paper": {
    width: "300px",
    padding: "20px",
    borderRadius: "8px",
    animation: "fadeIn 0.3s ease-in-out", // Adds a subtle fade-in animation
    "@keyframes fadeIn": {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
  },
};

export const title: SxProps<Theme> = {
  textAlign: "center",
  fontWeight: "bold",
  color: "#4CAF50",
  fontSize: "1.2rem",
};

export const message: SxProps<Theme> = {
  textAlign: "center",
  color: "#4CAF50",
  margin: "10px 0",
};

export const button: SxProps<Theme> = {
  width: "100%",
  backgroundColor: "#4CAF50",
  color: "#fff",
  fontWeight: "bold",
  padding: "8px",
  "&:hover": {
    backgroundColor: "#45a049",
  },
};
