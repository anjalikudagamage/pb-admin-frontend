import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, ListItemButton, Box, Typography, Paper } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import InboxIcon from '@mui/icons-material/Inbox';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import WidgetsIcon from '@mui/icons-material/Widgets';

const Sidebar: React.FC = () => {
  return (
    <Box sx={{ width: 250, backgroundColor: '#f7f7f7', padding: '16px', height: '96vh', display: 'flex', flexDirection: 'column', gap: 1 }}>
      
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '18px', backgroundColor: '#FFA07A', borderRadius: '12px', padding: '16px' }}>
        <Typography variant="h6" color="white">Create New</Typography>
      </Box>
      
      {/* Dashboard Section */}
      <Paper sx={{ borderRadius: '12px', padding: '8px' }}>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><ViewSidebarIcon /></ListItemIcon>
              <ListItemText primary="Sidebar Type" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><ViewModuleIcon /></ListItemIcon>
              <ListItemText primary="Page Layouts" />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>

      {/* Inbox Section */}
      <Paper sx={{ borderRadius: '12px', padding: '8px' }}>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><ConfirmationNumberIcon /></ListItemIcon>
              <ListItemText primary="Ticket" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><MoreHorizIcon /></ListItemIcon>
              <ListItemText primary="Extra" />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>

      {/* UI Elements Section */}
      <Paper sx={{ borderRadius: '12px', padding: '8px' }}>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><WidgetsIcon /></ListItemIcon>
              <ListItemText primary="UI Elements" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Cards" inset />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Components" inset />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Widgets" inset />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Sidebar;
