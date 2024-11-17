import { createSlice } from "@reduxjs/toolkit";
import {
  photographerSignup,
  photographerLogin,
  fetchPhotographerDetails,
  updatePhotographer,
} from "../actions/photographerActions";

interface IPhotographerState {
  isLoading: boolean;
  isPhotographerAuthenticated: boolean;
  error: string | null;
  user: IPhotographerUser | null;
  photographerDetails: IPhotographerDetails | null;
}

interface IPhotographerUser {
  id: number;
  email: string;
  password?: string;
}

interface PackageDetails {
  name: string;
  details: {
    photos: number;
    hours: number;
    locations: number;
    price: number;
  };
}

interface IPhotographerDetails {
  businessName: string;
  businessDescription: string;
  packages: PackageDetails[];
}

interface IPhotographerState {
  isLoading: boolean;
  isPhotographerAuthenticated: boolean;
  error: string | null;
  user: IPhotographerUser | null;
  photographerDetails: IPhotographerDetails | null;
}

const initialState: IPhotographerState = {
  isLoading: false,
  isPhotographerAuthenticated: false,
  error: null,
  user: null,
  photographerDetails: null,
};

const photographerSlice = createSlice({
  name: "photographer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(photographerSignup.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(photographerSignup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isPhotographerAuthenticated = true;
        state.user = action.payload.photographerDetails;
        state.error = null;
      })
      .addCase(photographerSignup.rejected, (state, action) => {
        state.isLoading = false;
        state.isPhotographerAuthenticated = false;
        state.error = action.payload as string;
      })
      .addCase(photographerLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(photographerLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isPhotographerAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(photographerLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isPhotographerAuthenticated = false;
        state.error = action.payload as string;
      })
      .addCase(fetchPhotographerDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.photographerDetails = action.payload;
        state.error = null;
      })
      .addCase(fetchPhotographerDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPhotographerDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(updatePhotographer.fulfilled, (state, action) => {
        state.photographerDetails = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(updatePhotographer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePhotographer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default photographerSlice.reducer;
