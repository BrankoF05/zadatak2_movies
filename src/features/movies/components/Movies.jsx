import React from "react";
import "../styles/movies.css";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import MovieCard from "./MovieCard";

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
      <Row gutter={[16, 8]}>
        {filteredMovies &&
          filteredMovies.map((movie) => (
            <Col key={movie.id} xs={24} sm={24} md={12} lg={8}>
              <MovieCard
                movie={movie}
                navigate={navigate}
                image={image}
                genres={genres}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
}
