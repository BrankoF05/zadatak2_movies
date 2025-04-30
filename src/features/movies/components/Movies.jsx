import React from "react";
import "../styles/movies.css";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import MovieCard from "../../../components/MovieCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchList } from "../../list/slices/listSlice";

export default function Movies({
  movies,
  image,
  filter,
  genres,
  selectedGenre,
  list,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  const navigate = useNavigate();
  console.log("Filmovi", movies);
  console.log("lust", list);
  const filteredMovies =
    movies &&
    movies.filter((movie) => {
      const matchesTitle = movie.title
        .toLowerCase()
        .includes(filter.toLowerCase());

      const matchesGenre = selectedGenre
        ? movie.genre_ids.includes(selectedGenre)
        : true;
      return matchesTitle && matchesGenre;
    });

  return (
    <Row gutter={[16, 16]} style={{ width: "70%", padding: "10px" }}>
      {filteredMovies &&
        filteredMovies.map((movie) => (
          <Col key={movie.id} xs={24} sm={24} md={12} lg={6}>
            <MovieCard
              list={list ? list : null}
              movie={movie}
              navigate={navigate}
              image={image}
              genres={genres}
            />
          </Col>
        ))}
    </Row>
  );
}
