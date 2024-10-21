import { createSlice } from "@reduxjs/toolkit";
import { photographerSignup } from "../actions/photographerActions";

interface IPhotographerState {
  isLoading: boolean;
  isPhotographerenticated: boolean;
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
  isPhotographerenticated: false,
  error: null,
  user: null,
};

const photographerSlice = createSlice({
  name: "auth",
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
        state.isPhotographerenticated = true;
        state.user = action.payload.photographerDetails;
        state.error = null;
      })
      .addCase(photographerSignup.rejected, (state, action) => {
        state.isLoading = false;
        state.isPhotographerenticated = false;
        state.error = action.payload as string;
      });
  },
});

export default photographerSlice.reducer;