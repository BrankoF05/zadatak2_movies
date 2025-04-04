import React from "react";
import "../styles/movies.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function Movies({ movies, image }) {
  const navigate = useNavigate();
  console.log("movies from movie", movies);
  return (
    <div className="movies-cards">
      {movies &&
        movies.results.map((movie) => {
          return (
            <div
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="movie-card"
              style={{
                backgroundImage: `url(${image}${movie.poster_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>
          );
        })}
    </div>
  );
}
