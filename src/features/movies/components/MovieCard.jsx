import React from "react";
export default function MovieCard({ movie, navigate, image, genres }) {
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
      <div className="genres">
        {movie.genre_ids && genres ? (
          movie.genre_ids.map((genreId) => {
            const genre = genres.genres.find((g) => g.id === genreId);
            return genre ? <h2 key={genre.id}>{genre.name}</h2> : null;
          })
        ) : (
          <h1>No genres</h1>
        )}
      </div>
      <div className="overview">
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
