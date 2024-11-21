import { createSlice } from "@reduxjs/toolkit";
import {
  photographerSignup,
  photographerLogin,
  fetchPhotographerDetails,
  updatePhotographer,
} from "../actions/photographerActions";

interface PackageDetails {
  name: string;
  details: {
    photos: number;
    locations: number;
    price: number;
  };
}

interface IPhotographerUser {
  id: number;
  email: string;
  password?: string;
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
        state.user = action.payload.user;
      })
      .addCase(photographerSignup.rejected, (state, action) => {
        state.isLoading = false;
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
      })
      .addCase(photographerLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchPhotographerDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPhotographerDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.photographerDetails = action.payload ? action.payload : null;
      })
      .addCase(fetchPhotographerDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(updatePhotographer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePhotographer.fulfilled, (state, action) => {
        state.photographerDetails = action.payload;
        state.isLoading = false;
      })
      .addCase(updatePhotographer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default photographerSlice.reducer;
