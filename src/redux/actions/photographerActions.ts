import { createAsyncThunk } from "@reduxjs/toolkit";
import { photographerClient } from "../../api/axiosClient";
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

interface UpdatePayload {
  id: number;
  businessName: string;
  businessDescription: string;
  email: string;
  password: string;
  packageDetails: Record<
    string,
    { photos: number; locations: number; price: number }
  >;
}

// Photographer signup async action
export const photographerSignup = createAsyncThunk(
  "photographer/signup",
  async (payload: SignupPayload, { rejectWithValue }) => {
    try {
      const response = await photographerClient.post("/signup", payload);
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

// photographerActions.ts
export const photographerLogin = createAsyncThunk(
  "photographer/login",
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await photographerClient.post("/login", payload);
      return response.data; // Returns the photographer data on successful login
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
      const response = await photographerClient.get(
        `/${photographerId}/details`
      );

      // Parse package details from string to structured object
      const parsedPackageDetails = Object.entries(
        response.data.packageDetails
      ).map(([name, detailsString]) => {
        // Assert detailsString is a string so TypeScript knows how to handle it
        const details = (detailsString as string).match(/\d+/g) || [];
        const [photos, hours, locations, price] = details.map(Number); // Convert each item to a number
        return {
          name,
          details: {
            photos: photos || 0,
            hours: hours || 0,
            locations: locations || 0,
            price: price || 0,
          },
        };
      });

      return { ...response.data, packages: parsedPackageDetails };
    } catch (error) {
      let errorMsg = "Failed to fetch photographer details";
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMsg = error.response.data.message;
      }
      return rejectWithValue(errorMsg);
    }
  }
);

export const updatePhotographer = createAsyncThunk(
  "photographer/update",
  async (payload: UpdatePayload, { rejectWithValue }) => {
    try {
      const response = await photographerClient.put(
        `/photographer/${payload.id}/update`,
        payload
      );
      return response.data;
    } catch (error) {
      let errorMsg = "Failed to update photographer details";
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMsg = error.response.data.message;
      }
      return rejectWithValue(errorMsg);
    }
  }
);
