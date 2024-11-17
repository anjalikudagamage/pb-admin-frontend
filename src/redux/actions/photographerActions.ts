import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../api/axiosClient";
import { AxiosError } from "axios";

interface SignupPayload {
  businessName: string;
  businessDescription: string;
  email: string;
  password: string;
  packageDetails: Record<string, string>;
}

interface LoginPayload {
  email: string;
  password: string;
}

type UpdatePayload = {
  id: number;
  businessName: string;
  businessDescription: string;
  email: string;
  password: string;
  packageDetails: Record<string, string>;
};

// Photographer signup async action
export const photographerSignup = createAsyncThunk(
  "photographer/signup",
  async (payload: SignupPayload, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/photographer/signup", payload);
      return response.data;
    } catch (error: AxiosError | unknown) {
      let errorMsg = "Signup failed";
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMsg = error.response.data.message;
      } else if (error instanceof Error) {
        errorMsg = error.message;
      }
      return rejectWithValue(errorMsg);
    }
  }
);

// Photographer login async action
export const photographerLogin = createAsyncThunk(
  "photographer/login",
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/photographer/login", payload);
      return response.data;
    } catch (error) {
      let errorMsg = "Login failed";
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMsg = error.response.data.message;
      }
      return rejectWithValue(errorMsg);
    }
  }
);

// Fetch photographer details async action
export const fetchPhotographerDetails = createAsyncThunk(
  "photographer/fetchDetails",
  async (photographerId: number, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(
        `/photographer/${photographerId}/details`
      );
      const parsedPackageDetails = Object.entries(
        response.data.packageDetails
      ).map(([name, detailsString]) => {
        const details = (detailsString as string).match(/\d+/g) || [];
        const [photos, locations, price] = details.map(Number);
        return { name, details: { photos, locations, price } };
      });
      return { ...response.data, packages: parsedPackageDetails };
    } catch {
      return rejectWithValue("Failed to fetch photographer details");
    }
  }
);

// Update photographer async action
export const updatePhotographer = createAsyncThunk(
  "photographer/update",
  async (payload: UpdatePayload, { rejectWithValue }) => {
    try {
      const response = await apiClient.put(
        `/photographer/${payload.id}/update`,
        payload
      );
      return response.data;
    } catch {
      return rejectWithValue("Failed to update photographer details");
    }
  }
);