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
        backgroundColor: "#333333", 
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
          backgroundColor: "#555555", 
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        <Typography variant="h6" color="white">
          Quick Actions
        </Typography>
      </Box>

      {/* Main Section */}
      <Paper sx={{ backgroundColor: "#444444", borderRadius: "12px", padding: "8px" }}>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("Dashboard")}>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" primaryTypographyProps={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigation("Booking Requests")}
            >
              <ListItemIcon>
                <CalendarTodayIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Booking Requests" primaryTypographyProps={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("Analytics")}>
              <ListItemIcon>
                <InsightsIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Analytics" primaryTypographyProps={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigation("Profile Settings")}
            >
              <ListItemIcon>
                <EditIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Profile Settings" primaryTypographyProps={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>

      {/* Albums and Gallery Section */}
      <Paper sx={{ backgroundColor: "#444444", borderRadius: "12px", padding: "8px" }}>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("Manage Albums")}>
              <ListItemIcon>
                <PhotoLibraryIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Manage Albums" primaryTypographyProps={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("Gallery Layouts")}>
              <ListItemIcon>
                <CollectionsIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Gallery Layouts" primaryTypographyProps={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>

      {/* Messaging Section */}
      <Paper sx={{ backgroundColor: "#444444", borderRadius: "12px", padding: "8px" }}>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("Inbox")}>
              <ListItemIcon>
                <InboxIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Inbox" primaryTypographyProps={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("Client Contacts")}>
              <ListItemIcon>
                <AccountCircleIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Client Contacts" primaryTypographyProps={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>

      {/* UI Elements Section */}
      <Paper sx={{ backgroundColor: "#444444", borderRadius: "12px", padding: "8px" }}>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("UI Elements")}>
              <ListItemIcon>
                <WidgetsIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="UI Elements" primaryTypographyProps={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Cards" inset primaryTypographyProps={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Sidebar;
