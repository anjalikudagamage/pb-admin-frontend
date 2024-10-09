import { SxProps, Theme } from "@mui/material";

export const appBarSx = {
  backgroundColor: "black",
};

export const adbIconSx: SxProps<Theme> = {
  display: { xs: "none", md: "flex" },
  mr: 1,
};

export const typographySx: SxProps<Theme> = {
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
};

export const iconButtonSx: SxProps<Theme> = {
  flexGrow: 1,
  display: { xs: "flex", md: "none" },
};

export const menuSx: SxProps<Theme> = { display: { xs: "block", md: "none" } };

export const adbIconSxMobile: SxProps<Theme> = {
  display: { xs: "flex", md: "none" },
  mr: 1,
};

export const typographySxMobile: SxProps<Theme> = {
  mr: 2,
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
};

export const buttonSx: SxProps<Theme> = {
  my: 2,
  color: "white",
  display: "block",
};

export const menuUserSx: SxProps<Theme> = { mt: "45px" };
