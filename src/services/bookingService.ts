// services/bookingService.ts
import { bookingClient } from "../api/axiosClient";
import { AxiosError } from "axios";

export const fetchAllBookingsService = async () => {
  try {
    const response = await bookingClient.get("/");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(error.response?.data?.message || "Failed to fetch bookings");
    }
    return Promise.reject("An unknown error occurred while fetching bookings");
  }
};
