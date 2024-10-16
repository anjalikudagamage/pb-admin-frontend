import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { tableStyles } from "./styles";

interface User {
  fullName: string;
  contactNumber: string;
  email: string;
  package: string;
  date: string;
  time: string;
  avatar: string;
}

const users: User[] = [
  {
    fullName: "John Doe",
    contactNumber: "+1-234-567-8901",
    email: "john@example.com",
    package: "Premium",
    date: "2024-10-01",
    time: "10:00 AM",
    avatar: "/path/to/avatar1.jpg",
  },
  {
    fullName: "Oscar Rhys",
    contactNumber: "+1-234-567-8902",
    email: "oscar@example.com",
    package: "Standard",
    date: "2024-10-02",
    time: "11:00 AM",
    avatar: "/path/to/avatar2.jpg",
  },
  // Add more users as needed
];

const UserTable: React.FC = () => {
  return (
    <TableContainer component={Paper} sx={tableStyles}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Contact Number</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Package</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar src={user.avatar} sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {user.fullName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {user.email}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>{user.contactNumber}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.package}</TableCell>
              <TableCell>{user.date}</TableCell>
              <TableCell>{user.time}</TableCell>
              <TableCell align="right">
                <Button variant="text" color="primary">
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
