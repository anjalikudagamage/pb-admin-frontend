// UserTable.tsx
import React, { useEffect } from "react";
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
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchAllBookings } from "../../../redux/actions/bookingActions";

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { bookings, isLoading, error } = useSelector((state: RootState) => state.booking);

  useEffect(() => {
    dispatch(fetchAllBookings());
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      {isLoading ? (
        <Box display="flex" justifyContent="center" p={2}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" align="center">
          {error}
        </Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Package</TableCell>
              <TableCell>Event Date</TableCell>
              <TableCell>Event Time</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar src={user.avatar} sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {user.fullName}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.packageName}</TableCell>
                <TableCell>{user.eventDate}</TableCell>
                <TableCell>{user.eventTime}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell align="right">
                  <Button variant="text" color="primary">
                    Edit
                  </Button>
                  <Button variant="text" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default UserTable;

