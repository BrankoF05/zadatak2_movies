import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/slices/movies";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
