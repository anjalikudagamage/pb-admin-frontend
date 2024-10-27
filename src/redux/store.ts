// store.ts
import { configureStore } from "@reduxjs/toolkit";
import photographerReducer from "./slice/photographerSlice";
import bookingReducer from "./slice/bookingSlice";

const store = configureStore({
  reducer: {
    photographer: photographerReducer,
    booking: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
