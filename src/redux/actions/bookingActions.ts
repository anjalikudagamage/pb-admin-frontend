// redux/actions/bookingActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookingClient } from "../../api/axiosClient";
import { AxiosError } from "axios";

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
