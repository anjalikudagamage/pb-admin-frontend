import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import LanguageIcon from "@mui/icons-material/Language";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import {
  appBarSx,
  adbIconSx,
  typographySx,
  menuSx,
  adbIconSxMobile,
  typographySxMobile,
  buttonSx,
} from "./styles";

const pages = ["Booking Requests", "Analytics Dashboard", "Profile Settings"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (page: string) => {
    if (page === "Booking Requests") {
      navigate("/requets");
    } else if (page === "Analytics Dashboard") {
      navigate("/dashbord");
    } else if (page === "Profile Settings") {
      navigate("/details");
    } else if (page === "Showcase Your Expertise") {
      window.location.href = "http://localhost:5174/login";
    } else if (page === "Sign In") {
      navigate("/login");
    }
  };

  return (
    <AppBar position="fixed" sx={appBarSx}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CameraEnhanceIcon sx={adbIconSx} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={typographySx}
          >
            CLICKBOOKER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={menuSx}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <CameraEnhanceIcon sx={adbIconSxMobile} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={typographySxMobile}
          >
            CLICKBOOKER
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleClick(page)}
                sx={buttonSx}
              >
                {page}
              </Button>
            ))}
            <IconButton size="large" color="inherit" sx={{ ml: 2 }}>
              <LogoutIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="change language"
              color="inherit"
              sx={{ ml: 2 }}
            >
              <LanguageIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="contact us"
              color="inherit"
              sx={{ ml: 2 }}
            >
              <HelpIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
