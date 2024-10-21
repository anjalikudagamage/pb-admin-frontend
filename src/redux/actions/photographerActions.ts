import { createAsyncThunk } from "@reduxjs/toolkit";
import { photographerClient } from "../../api/axiosClient";

// Photographer signup async action
export const photographerSignup = createAsyncThunk(
  "photographer/signup",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await photographerClient.post("/signup", payload);
      return response.data;
    } catch (error: any) {
      const errorMsg =
        error.response?.data?.message || error.message || "Signup failed";
      return rejectWithValue(errorMsg);
    }
  }
);

// Photographer login async action
export const photographerLogin = createAsyncThunk(
  "photographer/login",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await photographerClient.post("/login", payload);
      return response.data;
    } catch (error: any) {
      const errorMsg =
        error.response?.data?.message || error.message || "Login failed";
      return rejectWithValue(errorMsg);
    }
  }
);
