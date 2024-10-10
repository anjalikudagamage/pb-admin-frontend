import React from "react";
import { useNavigate } from "react-router-dom";
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  appBarSx,
  adbIconSx,
  typographySx,
  menuSx,
  buttonSx,
} from "./styles";

const pages = ["CREATE NEW ACCOUNT", "MY ACCOUNTS"];

function Navbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCreateAccountClick = () => {
    navigate("/signup"); 
  };

  const handleMyAccountClick = () => {
    navigate("/request"); 
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
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    if (page === "CREATE NEW ACCOUNT") {
                      handleCreateAccountClick();
                    } else if (page === "MY ACCOUNTS") {
                      handleMyAccountClick();
                    }
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <EditIcon sx={{ mr: 1 }} /> Edit
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <DeleteIcon sx={{ mr: 1 }} /> Delete
              </MenuItem>
            </Menu>
          </Box>

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
                onClick={() => {
                  if (page === "CREATE NEW ACCOUNT") {
                    handleCreateAccountClick();
                  } else if (page === "MY ACCOUNTS") {
                    handleMyAccountClick();
                  }
                }}
                sx={buttonSx}
              >
                {page}
              </Button>
            ))}
            <IconButton size="large" color="inherit" sx={{ ml: 2 }}>
              <EditIcon />
            </IconButton>
            <IconButton size="large" color="inherit" sx={{ ml: 2 }}>
              <DeleteIcon />
            </IconButton>
            <IconButton size="large" color="inherit" sx={{ ml: 2 }}>
              <LogoutIcon />
            </IconButton>
            <IconButton size="large" color="inherit" sx={{ ml: 2 }}>
              <NotificationsIcon />
            </IconButton>
            <IconButton size="large" color="inherit" sx={{ ml: 2 }}>
              <LanguageIcon />
            </IconButton>
            <IconButton size="large" color="inherit" sx={{ ml: 2 }}>
              <HelpIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
