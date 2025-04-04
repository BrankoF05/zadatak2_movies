import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/slices/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
