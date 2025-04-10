import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMovie,
  fetchReviews,
  fetchImages,
  fetchVideos,
} from "../slices/movieSlice";
import Movie from "./Movie";
import NavBar from "../../../components/NavBar";

export default function MovieContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovie(id));
    dispatch(fetchReviews(id));
    dispatch(fetchImages(id));
    dispatch(fetchVideos(id));
  }, [dispatch, id]);

  if (movie.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (movie.isError) {
    return <h1>Error no movie</h1>;
  }

  return (
    <div>
      <NavBar />
      <Movie
        movie={movie.data}
        reviews={movie.reviews}
        images={movie.images}
        videos={movie.videos}
      />
    </div>
  );
}
