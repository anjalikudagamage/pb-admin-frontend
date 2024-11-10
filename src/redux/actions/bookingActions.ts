// redux/actions/bookingActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookingClient } from "../../api/axiosClient";
import { AxiosError } from "axios";

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

export const fetchAllBookings = createAsyncThunk(
  "booking/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await bookingClient.get("/alldata"); // GET request to fetch all bookings
      return response.data;
    } catch (error: AxiosError | unknown) {
      let errorMsg = "Failed to fetch bookings";
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMsg = error.response.data.message;
      } else if (error instanceof Error) {
        errorMsg = error.message;
      }
      return rejectWithValue(errorMsg);
    }
  }
);

export const deleteBooking = createAsyncThunk(
  "booking/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      await bookingClient.delete(`/${id}`); // Delete the booking using the id
      return id; // Returning the ID for removal from the state
    } catch (error: AxiosError | unknown) {
      return rejectWithValue("Failed to delete booking");
    }
  }
);

export const updateBooking = createAsyncThunk(
  "booking/update",
  async (booking: Booking, { rejectWithValue }) => {
    try {
      const response = await bookingClient.put(`/${booking.id}`, booking); // Update the booking
      return response.data;
    } catch (error: AxiosError | unknown) {
      return rejectWithValue("Failed to update booking");
    }
  }
);
