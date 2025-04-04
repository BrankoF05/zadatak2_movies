import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/slices/moviesSlice";
import movieReducer from "./features/movie/slices/movieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movie: movieReducer,
  },
});
