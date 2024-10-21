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

// Photographer login async action
export const photographerLogin = createAsyncThunk(
  "photographer/login",
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await photographerClient.post("/login", payload);
      return response.data;
    } catch (error: AxiosError | unknown) {
      let errorMsg = "Login failed";
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMsg = error.response.data.message;
      } else if (error instanceof Error) {
        errorMsg = error.message;
      }
      return rejectWithValue(errorMsg);
    }
  }
);
