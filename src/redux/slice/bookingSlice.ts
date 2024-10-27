// redux/slice/bookingSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllBookings } from "../actions/bookingActions";

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
      });
  },
});

export default bookingSlice.reducer;
