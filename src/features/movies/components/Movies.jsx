import React from "react";
import "../styles/movies.css";

export default function Movies({ movies, image }) {
  console.log(movies);
  return (
    <div className="movies-cards">
      {movies &&
        movies.results.map((movie) => {
          return (
            <div
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
