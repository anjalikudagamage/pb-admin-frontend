import { AxiosError } from "axios";
import { apiClient } from "../api/axiosClient";
import { Booking } from "../constants/types/bookingTypes";

export const fetchAllBookingsService = async (): Promise<Booking[]> => {
  try {
    const { data } = await apiClient.get<Booking[]>("/booking/alldata");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Failed to fetch bookings";
    }
    throw "An unknown error occurred while fetching bookings";
  }
};

export const deleteBookingService = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`/booking/${id}`);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Failed to delete booking";
    }
    throw "An unknown error occurred while deleting booking";
  }
};

export const updateBookingService = async (
  booking: Booking
): Promise<Booking> => {
  try {
    const { data } = await apiClient.put<Booking>(
      `/booking/${booking.id}`,
      booking
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Failed to update booking";
    }
    throw "An unknown error occurred while updating booking";
  }
};
