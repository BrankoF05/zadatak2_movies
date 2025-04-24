import React, { useState } from "react";
import { Card, Flex, Space } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { postData } from "../../list/slices/listSlice";
import { useDispatch } from "react-redux";

export default function MovieCard({ movie, navigate, image, genres }) {
  const dispatch = useDispatch();
  const [test, setTest] = useState(false);
  return (
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
        {test ? (
          <HeartFilled
            onClick={() => {
              setTest(false);
              dispatch(postData(movie.id));
            }}
            style={{ fontSize: "34px" }}
          />
        ) : (
          <HeartOutlined
            style={{ fontSize: "34px" }}
            disabled={test}
            onClick={() => setTest(true)}
          />
        )}
      </Flex>
    </Card>
  );
}
