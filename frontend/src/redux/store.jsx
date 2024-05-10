import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import trajetSlice from "./slices/trajet.slice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    trajet: trajetSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
