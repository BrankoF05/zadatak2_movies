import React from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { memo } from "react";

function SelectGenres({ genres, setSelectedGenre, selectedGenre }) {
  const dispatch = useDispatch();
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
        value={selectedGenre !== 0 && selectedGenre}
        placeholder="Select genre"
        allowClear="true"
        onChange={(e) => dispatch(setSelectedGenre(e))}
      />
    </div>
  );
}

export default memo(SelectGenres);
