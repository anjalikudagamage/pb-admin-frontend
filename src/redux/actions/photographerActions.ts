import { createAsyncThunk } from "@reduxjs/toolkit";
import { photographerSignupService } from "../../services/photographerService";

export const photographerSignup = createAsyncThunk(
  "auth/photographerSignup",
  async (signupData: Record<string, string>, { rejectWithValue }) =>
    photographerSignupService(signupData).catch((error) => rejectWithValue(error))
);
