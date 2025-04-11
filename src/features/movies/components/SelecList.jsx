import { Button, Space } from "antd";
import React from "react";

export default function SelecList({ changeMovieList, list }) {
  return (
    <Space>
      <Button
        disabled={list === "now_playing"}
        name="now_playing"
        onClick={changeMovieList}
        color="primary"
        variant="text"
      >
        Now playing
      </Button>

      <Button
        disabled={list === "popular"}
        name="popular"
        onClick={changeMovieList}
        color="primary"
        variant="text"
      >
        Popular
      </Button>
      <Button
        disabled={list === "top_rated"}
        name="top_rated"
        onClick={changeMovieList}
        color="primary"
        variant="text"
      >
        Top rated
      </Button>
      <Button
        disabled={list === "upcoming"}
        name="upcoming"
        onClick={changeMovieList}
        color="primary"
        variant="text"
      >
        Upcoming
      </Button>
    </Space>
  );
}
