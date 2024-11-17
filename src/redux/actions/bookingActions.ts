import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../api/axiosClient";
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
      const response = await apiClient.get("/booking/alldata");
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
      await apiClient.delete(`/booking/${id}`);
      return id;
    } catch {
      return rejectWithValue("Failed to delete booking");
    }
  }
);

export const updateBooking = createAsyncThunk(
  "booking/update",
  async (booking: Booking, { rejectWithValue }) => {
    try {
      const response = await apiClient.put(`/booking/${booking.id}`, booking);
      return response.data;
    } catch {
      return rejectWithValue("Failed to update booking");
    }
  }
);
