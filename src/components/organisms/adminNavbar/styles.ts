import { SxProps, Theme } from "@mui/material";

export const toolbar: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
};

export const search: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  borderRadius: 1,
  backgroundColor: "grey.200",
  padding: "0 8px",
  width: "auto",
};

export const searchIcon: SxProps<Theme> = {
  marginRight: 1,
};

export const inputRoot: SxProps<Theme> = {
  color: "inherit",
};

export const inputInput: SxProps<Theme> = {
  padding: 1,
  width: "100%",
};
