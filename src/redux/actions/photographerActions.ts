import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  photographerSignupService,
  photographerLoginService,
  fetchPhotographerDetailsService,
  updatePhotographerService,
} from "../../services/photographerService";
import {
  SignupPayload,
  LoginPayload,
  UpdatePayload,
} from "../../constants/types/photographerTypes";

// Photographer signup async action
export const photographerSignup = createAsyncThunk(
  "photographer/signup",
  async (payload: SignupPayload, { rejectWithValue }) => {
    try {
      return await photographerSignupService(payload);
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);

// Photographer login async action
export const photographerLogin = createAsyncThunk(
  "photographer/login",
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      return await photographerLoginService(payload);
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);

// Fetch photographer details async action
export const fetchPhotographerDetails = createAsyncThunk(
  "photographer/fetchDetails",
  async (photographerId: number, { rejectWithValue }) => {
    try {
      return await fetchPhotographerDetailsService(photographerId);
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);

// Update photographer async action
export const updatePhotographer = createAsyncThunk(
  "photographer/update",
  async (payload: UpdatePayload, { rejectWithValue }) => {
    try {
      return await updatePhotographerService(payload);
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);
