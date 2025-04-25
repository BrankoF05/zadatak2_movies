import React, { useEffect, useState } from "react";
import { Card, Flex } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { changeList, fetchList } from "../../list/slices/listSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MovieCard({ list, movie, navigate, image, genres }) {
  const dispatch = useDispatch();
  const [test, setTest] = useState(false);

  const [isMovieInList, setMovieList] = useState(
    list.data && list.data.items.some((item) => item.id === movie.id)
  );

  return (
    // <Link to={`/movie/${movie.id}`}>
    <Card
      // onClick={() => navigate(`/movie/${movie.id}`)}
      title={movie.title}
      hoverable
      cover={<img alt={movie.title} src={image + movie.poster_path} />}
    >
      <Flex justify="space-between" wrap>
        <Flex gap={10} wrap>
          {movie.genre_ids && genres ? (
            movie.genre_ids.map((genreId) => {
              const genre = genres.genres.find((g) => g.id === genreId);
              return genre ? <p key={genre.id}>{genre.name}</p> : null;
            })
          ) : (
            <h1>No genres</h1>
          )}
        </Flex>
        {isMovieInList ? (
          <HeartFilled
            onClick={(e) => {
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
              setMovieList(!isMovieInList);

              dispatch(
                changeList({ string: "remove_item", movieId: movie.id })
              );
            }}
            style={{ fontSize: "34px" }}
          />
        ) : (
          <HeartOutlined
            onClick={(e) => {
              setMovieList(!isMovieInList);

              dispatch(
                changeList({
                  string: "add_item",
                  movieId: movie.id,
                })
              );
            }}
            style={{ fontSize: "34px" }}
          />
        )}
      </Flex>
    </Card>
    // </Link>
  );
}
