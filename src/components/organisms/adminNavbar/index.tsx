import React from "react";
import { AppBar, Toolbar, InputBase, IconButton, Box } from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { toolbar, search, searchIcon, inputRoot, inputInput } from "./styles";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx ={{backgroundColor: "black"}}>
      <Toolbar sx={toolbar}>
        <Box sx={search}>
          <SearchIcon sx={searchIcon} />
          <InputBase
            placeholder="Search"
            sx={inputRoot}
            inputProps={{ sx: inputInput }}
          />
        </Box>
        <IconButton>
          <NotificationsIcon sx={{color: "white"}}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
