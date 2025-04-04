import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../slices/moviesSlice";
import { useEffect } from "react";
import Movies from "./Movies";
import "../styles/moviesContainer.css";

export default function MoviesContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (state.movies.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="movies">
      <Movies movies={state.movies.data} image={imageUrl} />
    </div>
  );
}
