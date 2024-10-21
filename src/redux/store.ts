import { configureStore } from "@reduxjs/toolkit";
import photographerReducer from "./slice/photographerSlice";

const store = configureStore({
  reducer: {
    photographer: photographerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;