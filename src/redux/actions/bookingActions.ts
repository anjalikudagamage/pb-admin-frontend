import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllBookingsService,
  deleteBookingService,
  updateBookingService,
} from "../../services/bookingService";
import { Booking } from "../../constants/types/bookingTypes";

export const fetchAllBookings = createAsyncThunk<
  Booking[],
  void,
  { rejectValue: string }
>("booking/fetchAll", async (_, { rejectWithValue }) => {
  try {
    return await fetchAllBookingsService();
  } catch {
    return rejectWithValue("Failed to fetch bookings");
  }
});

export const deleteBooking = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("booking/delete", async (id, { rejectWithValue }) => {
  try {
    await deleteBookingService(id);
    return id;
  } catch {
    return rejectWithValue("Failed to delete booking");
  }
});

export const updateBooking = createAsyncThunk<
  Booking,
  Booking,
  { rejectValue: string }
>("booking/update", async (booking, { rejectWithValue }) => {
  try {
    return await updateBookingService(booking);
  } catch {
    return rejectWithValue("Failed to update booking");
  }
});
