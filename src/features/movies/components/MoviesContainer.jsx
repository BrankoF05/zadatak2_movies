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
import SelectGenres from "./SelectGenres";

export default function MoviesContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [filter, setFilter] = useState("");
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const selectedGenre = useSelector((state) => state.genres.selected_genre);

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
        <div className="filters">
          <SearchInput setFilter={setFilter} />
          <SelectGenres
            setSelectedGenre={setSelectedGenre}
            genres={state.genres.data}
          />
        </div>

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
