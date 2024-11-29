import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
  TextField,
  Snackbar,
  Alert,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import {
  fetchAllBookings,
  updateBooking,
  deleteBooking,
} from "../../../redux/actions/bookingActions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { grey, blue, green } from "@mui/material/colors";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

interface Booking {
  id: number;
  fullName: string;
  email: string;
  packageName: string;
  eventDate: string;
  eventTime: string;
  address: string;
  phoneNumber: string;
}

const BookingRequetsCard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { bookings, isLoading, error } = useSelector(
    (state: RootState) => state.booking
  );

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedBooking, setEditedBooking] = useState<Booking>({
    id: 0,
    fullName: "",
    email: "",
    packageName: "",
    eventDate: "",
    eventTime: "",
    address: "",
    phoneNumber: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  useEffect(() => {
    dispatch(fetchAllBookings());
  }, [dispatch]);

  const handleEditClick = (booking: Booking) => {
    setEditingId(booking.id);
    setEditedBooking(booking);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
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
    setEditingId(null);
    setSnackbarMessage("Booking updated successfully!");
    setSnackbarSeverity("success");
    setOpenSnackbar(true);
  };

  const handleDeleteClick = (id: number) => {
    dispatch(deleteBooking(id));
    setSnackbarMessage("Booking deleted successfully!");
    setSnackbarSeverity("error");
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box display="flex" flexDirection="column" gap={3} padding={3}>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          p={2}
          sx={{ backgroundColor: grey[200] }}
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" align="center" sx={{ margin: 2 }}>
          {error}
        </Typography>
      ) : (
        bookings.map((booking: Booking) => (
          <Card
            key={booking.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: 3,
              borderRadius: 3,
              backgroundColor: grey[50],
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            {editingId === booking.id ? (
              <>
                <CardContent>
                  <TextField
                    name="fullName"
                    label="Full Name"
                    value={editedBooking.fullName}
                    onChange={handleFieldChange}
                    fullWidth
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    name="email"
                    label="Email"
                    value={editedBooking.email}
                    onChange={handleFieldChange}
                    fullWidth
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    name="packageName"
                    label="Package"
                    value={editedBooking.packageName}
                    onChange={handleFieldChange}
                    fullWidth
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    name="eventDate"
                    label="Event Date"
                    value={editedBooking.eventDate}
                    onChange={handleFieldChange}
                    fullWidth
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    name="eventTime"
                    label="Event Time"
                    value={editedBooking.eventTime}
                    onChange={handleFieldChange}
                    fullWidth
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    name="address"
                    label="Address"
                    value={editedBooking.address}
                    onChange={handleFieldChange}
                    fullWidth
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    name="phoneNumber"
                    label="Phone Number"
                    value={editedBooking.phoneNumber}
                    onChange={handleFieldChange}
                    fullWidth
                    variant="outlined"
                  />
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleSaveEdit}
                    startIcon={<CheckIcon />}
                    sx={{ marginRight: 1 }}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleCancelEdit}
                    startIcon={<CloseIcon />}
                  >
                    Cancel
                  </Button>
                </CardActions>
              </>
            ) : (
              <>
                <CardContent>
                  <Box display="flex" flexDirection="column" gap={2}>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      color={blue[700]}
                    >
                      {booking.fullName}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                      <LocationOnIcon color="primary" />
                      <Typography variant="h6">{booking.address}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <PhoneIcon color="secondary" />
                      <Typography variant="h6">{booking.phoneNumber}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <DateRangeIcon color="action" />
                      <Typography variant="h6">
                        {booking.eventDate} at {booking.eventTime}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      color={green[600]}
                      display={"flex"}
                    >
                      <AddAPhotoIcon sx={{ marginRight: 1 }} />{" "}
                      {booking.packageName}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Tooltip title="Edit booking" arrow>
                    <IconButton
                      color="primary"
                      onClick={() => handleEditClick(booking)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete booking" arrow>
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteClick(booking.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </>
            )}
          </Card>
        ))
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BookingRequetsCard;
