import React, { useState } from "react";
import { Button, Card, Flex } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { changeList } from "../features/list/slices/listSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function MovieCard({ list, movie, navigate, image, genres }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [showGenre, setShowGenre] = useState(false);
  const [isMovieInList, setMovieList] = useState(
    list
      ? list.data && list.data.items.some((item) => item.id === movie.id)
      : true
  );

  return (
    // <Link to={`/movie/${movie.id}`}>
    <Card
      // onClick={() => navigate(`/movie/${movie.id}`)}
      title={movie.title}
      hoverable
      onMouseOver={() => setShowGenre(true)}
      onMouseLeave={() => setShowGenre(false)}
      cover={<img alt={movie.title} src={image + movie.poster_path} />}
    >
      <Flex justify="space-between" gap={50} wrap>
        {showGenre && (
          <Flex gap={10} wrap>
            {movie.genre_ids && genres ? (
              movie.genre_ids.map((genreId) => {
                const genre = genres.genres.find((g) => g.id === genreId);
                return genre ? (
                  <p
                    style={{ fontWeight: "lighter", margin: "0px" }}
                    key={genre.id}
                  >
                    {genre.name}
                  </p>
                ) : null;
              })
            ) : (
              <h1>No genres</h1>
            )}
          </Flex>
        )}
      </Flex>
      <Flex
        justify="space-between"
        align="center"
        wrap
        gap={10}
        style={{ marginTop: "10px", pointerEvents: "auto" }}
      >
        <Link to={`/movie/${movie.id}`}>
          <Button size="large" color="primary" variant="solid">
            More details
          </Button>
        </Link>

        {user.user &&
          (isMovieInList ? (
            <HeartFilled
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                setMovieList(!isMovieInList);

                dispatch(
                  changeList({ string: "remove_item", movieId: movie.id })
                );
              }}
              style={{ fontSize: "30px", order: "5" }}
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
              style={{ fontSize: "30px" }}
            />
          ))}
      </Flex>
    </Card>
    // </Link>
  );
}
