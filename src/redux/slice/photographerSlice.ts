import { createSlice } from "@reduxjs/toolkit";
import { photographerSignup } from "../actions/photographerActions";

interface IAuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  user: IAuthUser | null;
}

interface IAuthUser {
  id: number;
  email: string;
  role: string;
}

const initialState: IAuthState = {
  isLoading: false,
  isAuthenticated: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
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
        state.isAuthenticated = true;
        state.user = action.payload.photographerDetails;
        state.error = null;
      })
      .addCase(photographerSignup.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
