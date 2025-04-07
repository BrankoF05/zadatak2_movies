import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../slices/moviesSlice";
import { fetchGenres } from "../slices/genreSlice";
import { useEffect } from "react";
import Movies from "./Movies";
import "../styles/moviesContainer.css";
import SearchInput from "./SearchInput";
import { Flex } from "antd";
import { setSelectedGenre } from "../slices/genreSlice";

export default function MoviesContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [filter, setFilter] = useState("");
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const selectedGenre = useSelector((state) => state.genres.selected_genre);

  function setGenre() {
    dispatch(setSelectedGenre(28));
    console.log(selectedGenre);
    console.log(state);
  }

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
  }, [dispatch]);

  if (state.movies.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Flex justify="center" align="center" vertical="true">
        <SearchInput setFilter={setFilter} />
        <button onClick={setGenre}>klik</button>{" "}
        <div className="movies">
          <Movies
            movies={state.movies.data}
            image={imageUrl}
            filter={filter}
            genres={state.genres.data}
            selectedGenre={selectedGenre}
          />
        </div>
      </Flex>
    </div>
  );
}
