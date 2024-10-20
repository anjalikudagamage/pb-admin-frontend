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
import { tableStyles, statusStyles } from "./styles";

interface User {
  name: string;
  email: string;
  title: string;
  department: string;
  status: string;
  role: string;
  avatar: string;
}

const users: User[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    title: "Software Engineer",
    department: "Web dev",
    status: "Active",
    role: "Owner",
    avatar: "/path/to/avatar1.jpg",
  },
  {
    name: "Oscar Rhys",
    email: "oscar@example.com",
    title: "Software Engineer",
    department: "Web dev",
    status: "Active",
    role: "Owner",
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
            <TableCell>Name</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Role</TableCell>
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
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {user.email}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">
                  {user.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {user.department}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={statusStyles}>{user.status}</Typography>
              </TableCell>
              <TableCell>{user.role}</TableCell>
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
