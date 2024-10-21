import { createSlice } from "@reduxjs/toolkit";
import { photographerSignup, photographerLogin } from "../actions/photographerActions";

interface IPhotographerState {
  isLoading: boolean;
  isPhotographerAuthenticated: boolean;
  error: string | null;
  user: IPhotographerUser | null;
}

interface IPhotographerUser {
  id: number;
  email: string;
  role: string;
}

const initialState: IPhotographerState = {
  isLoading: false,
  isPhotographerAuthenticated: false,
  error: null,
  user: null,
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
    // Login cases
    .addCase(photographerLogin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(photographerLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isPhotographerAuthenticated = true;
      state.user = action.payload.photographerDetails; 
      state.error = null;
    })
    .addCase(photographerLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isPhotographerAuthenticated = false;
      state.error = action.payload as string;
    });
  },
});

export default photographerSlice.reducer;