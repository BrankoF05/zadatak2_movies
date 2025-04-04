import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../slices/movieSlice";
import Movie from "./Movie";

export default function MovieContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State from movie container", state);

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  if (state.movie.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (state.movie.isError) {
    return <h1>Error no movie</h1>;
  }

  return (
    <div>
      <Movie movie={state.movie.data} />
    </div>
  );
}
