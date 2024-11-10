// redux/slice/bookingSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { deleteBooking, fetchAllBookings, updateBooking } from "../actions/bookingActions";

interface Booking {
  id: number;
  fullName: string;
  email: string;
  packageName: string;
  eventDate: string;
  eventTime: string;
  address: string;
  phoneNumber: string;
  avatar?: string;
}

interface BookingState {
  bookings: Booking[];
  isLoading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  bookings: [],
  isLoading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBookings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookings = action.payload;
      })
      .addCase(fetchAllBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        // Remove the deleted booking from the list
        state.bookings = state.bookings.filter((booking) => booking.id !== action.payload);
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(updateBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.bookings.findIndex((booking) => booking.id === action.payload.id);
        if (index !== -1) {
          state.bookings[index] = action.payload;
        }
      })
      .addCase(updateBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default bookingSlice.reducer;
