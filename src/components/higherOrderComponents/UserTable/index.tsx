import React, { useEffect, useState } from "react";
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
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchAllBookings } from "../../../redux/actions/bookingActions";
import { updateBooking, deleteBooking } from "../../../redux/actions/bookingActions";

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { bookings, isLoading, error } = useSelector((state: RootState) => state.booking);
  
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedBooking, setEditedBooking] = useState({
    id: 0,
    fullName: "",
    email: "",
    packageName: "",
    eventDate: "",
    eventTime: "",
    address: "",
    phoneNumber: "",
  });

  useEffect(() => {
    dispatch(fetchAllBookings());
  }, [dispatch]);

  const handleEditClick = (booking: any) => {
    setEditingId(booking.id);
    setEditedBooking(booking);
  };

  const handleCancelEdit = () => {
    setEditingId(null); // Close the edit form
    setEditedBooking({
      id: 0,
      fullName: "",
      email: "",
      packageName: "",
      eventDate: "",
      eventTime: "",
      address: "",
      phoneNumber: "",
    });
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    dispatch(updateBooking(editedBooking));
    setEditingId(null); // Close the edit form
  };

  const handleDeleteClick = (id: number) => {
    dispatch(deleteBooking(id));
  };

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
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                {editingId === booking.id ? (
                  // Render editable fields when in edit mode
                  <>
                    <TableCell>
                      <TextField
                        name="fullName"
                        value={editedBooking.fullName}
                        onChange={handleFieldChange}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="email"
                        value={editedBooking.email}
                        onChange={handleFieldChange}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="packageName"
                        value={editedBooking.packageName}
                        onChange={handleFieldChange}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="eventDate"
                        value={editedBooking.eventDate}
                        onChange={handleFieldChange}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="eventTime"
                        value={editedBooking.eventTime}
                        onChange={handleFieldChange}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="address"
                        value={editedBooking.address}
                        onChange={handleFieldChange}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="phoneNumber"
                        value={editedBooking.phoneNumber}
                        onChange={handleFieldChange}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" onClick={handleSaveEdit}>
                        Save
                      </Button>
                      <Button variant="contained" color="secondary" onClick={handleCancelEdit}>
                        Cancel
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  // Render normal table row when not editing
                  <>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar src={booking.avatar} sx={{ mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {booking.fullName}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{booking.email}</TableCell>
                    <TableCell>{booking.packageName}</TableCell>
                    <TableCell>{booking.eventDate}</TableCell>
                    <TableCell>{booking.eventTime}</TableCell>
                    <TableCell>{booking.address}</TableCell>
                    <TableCell>{booking.phoneNumber}</TableCell>
                    <TableCell align="right">
                      <Button variant="text" color="primary" onClick={() => handleEditClick(booking)}>
                        Edit
                      </Button>
                      <Button variant="text" color="error" onClick={() => handleDeleteClick(booking.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default UserTable;
