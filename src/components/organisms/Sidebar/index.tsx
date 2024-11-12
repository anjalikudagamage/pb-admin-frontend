import React from "react";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EditIcon from "@mui/icons-material/Edit";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InsightsIcon from "@mui/icons-material/Insights";
import InboxIcon from "@mui/icons-material/Inbox";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WidgetsIcon from "@mui/icons-material/Widgets";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (page: string) => {
    if (page === "Dashboard") {
      navigate("/dashbord");
    } else if (page === "Booking Requests") {
      navigate("/requets");
    } else if (page === "Analytics") {
      navigate("/dashboard");
    } else if (page === "Profile Settings") {
      navigate("/details");
    } else if (page === "Manage Albums") {
      navigate("/albums");
    } else if (page === "Gallery Layouts") {
      navigate("/gallery");
    } else if (page === "Inbox") {
      navigate("/inbox");
    } else if (page === "Client Contacts") {
      navigate("/contacts");
    } else if (page === "UI Elements") {
      navigate("/ui-elements");
    }
  };

  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#f7f7f7",
        padding: "16px",
        height: "96vh",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "18px",
          backgroundColor: "#FFA07A",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        <Typography variant="h6" color="white">
          Quick Actions
        </Typography>
      </Box>

      {/* Main Section */}
      <Paper sx={{ borderRadius: "12px", padding: "8px" }}>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("Dashboard")}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigation("Booking Requests")}
            >
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary="Booking Requests" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("Analytics")}>
              <ListItemIcon>
                <InsightsIcon />
              </ListItemIcon>
              <ListItemText primary="Analytics" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigation("Profile Settings")}
            >
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="Profile Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>

      {/* Albums and Gallery Section */}
      <Paper sx={{ borderRadius: "12px", padding: "8px" }}>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("Manage Albums")}>
              <ListItemIcon>
                <PhotoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Albums" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("Gallery Layouts")}>
              <ListItemIcon>
                <CollectionsIcon />
              </ListItemIcon>
              <ListItemText primary="Gallery Layouts" />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>

      {/* Messaging Section */}
      <Paper sx={{ borderRadius: "12px", padding: "8px" }}>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("Inbox")}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("Client Contacts")}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Client Contacts" />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>

      {/* UI Elements Section */}
      <Paper sx={{ borderRadius: "12px", padding: "8px" }}>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("UI Elements")}>
              <ListItemIcon>
                <WidgetsIcon />
              </ListItemIcon>
              <ListItemText primary="UI Elements" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Cards" inset />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Sidebar;
