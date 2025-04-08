import React from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";

export default function SelectGenres({ genres, setSelectedGenre }) {
  const dispatch = useDispatch();
  console.log(genres);
  const options = genres
    ? genres.genres.map((genre) => ({
        value: genre.id,
        label: <p>{genre.name}</p>,
      }))
    : [];
  return (
    <div>
      <Select
        style={{ width: "250px" }}
        options={options}
        popupMatchSelectWidth="true"
        size="large"
        placeholder="Select genre"
        allowClear="true"
        onChange={(e) => dispatch(setSelectedGenre(e))}
      />
    </div>
  );
}
