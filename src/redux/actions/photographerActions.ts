import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  photographerSignupService,
  photographerLoginService,
  fetchPhotographerDetailsService,
  updatePhotographerService,
} from "../../services/photographerService";

interface SignupData {
  businessName: string;
  businessDescription: string;
  email: string;
  password: string;
  packageDetails: Record<string, string>;
}

interface LoginData {
  email: string;
  password: string;
}

interface UpdateData {
  id: number;
  businessName: string;
  businessDescription: string;
  email: string;
  password: string;
  packageDetails: Record<string, string>;
}

interface PackageDetails {
  name: string;
  details: {
    photos: number;
    locations: number;
    price: number;
  };
}

interface PhotographerDetailsResponse {
  businessName: string;
  businessDescription: string;
  packageDetails: Record<string, string>;
}

export const photographerSignup = createAsyncThunk(
  "photographer/signup",
  async (payload: SignupData, { rejectWithValue }) => {
    try {
      return await photographerSignupService(payload);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const photographerLogin = createAsyncThunk(
  "photographer/login",
  async (payload: LoginData, { rejectWithValue }) => {
    try {
      return await photographerLoginService(payload);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchPhotographerDetails = createAsyncThunk(
  "photographer/fetchDetails",
  async (id: number, { rejectWithValue }) => {
    try {
      const data: PhotographerDetailsResponse =
        await fetchPhotographerDetailsService(id);
      const packages: PackageDetails[] = Object.entries(
        data.packageDetails
      ).map(([name, detailsString]) => {
        const details = (detailsString as string).match(/\d+/g) || [];
        const [photos, locations, price] = details.map(Number);
        return { name, details: { photos, locations, price } };
      });

      return { ...data, packages };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updatePhotographer = createAsyncThunk(
  "photographer/update",
  async (payload: UpdateData, { rejectWithValue }) => {
    try {
      return await updatePhotographerService(payload);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
