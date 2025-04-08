import React from "react";
import "../styles/movies.css";
import { useNavigate } from "react-router-dom";

export default function Movies({
  movies,
  image,
  filter,
  genres,
  selectedGenre,
}) {
  const navigate = useNavigate();

  console.log(selectedGenre);
  const filteredMovies =
    movies &&
    movies.results.filter((movie) => {
      const matchesTitle = movie.title
        .toLowerCase()
        .includes(filter.toLowerCase());

      const matchesGenre = selectedGenre
        ? movie.genre_ids.includes(selectedGenre)
        : true;
      return matchesTitle && matchesGenre;
    });

  return (
    <div className="movies-cards">
      {filteredMovies &&
        filteredMovies.map((movie) => {
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
                  <h1>greska</h1>
                )}
              </div>
              <div className="overview">
                <p>{movie.overview}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
