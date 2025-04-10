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
import NavBar from "../../../components/NavBar";

export default function MoviesContainer() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const [filter, setFilter] = useState("");
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const selectedGenre = useSelector((state) => state.genres.selected_genre);
  const genres = useSelector((state) => state.genres.data);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
  }, [dispatch]);

  if (movies.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <NavBar />
      <Flex justify="center" align="center" vertical="true">
        <div className="filters">
          <SearchInput setFilter={setFilter} />
          <SelectGenres setSelectedGenre={setSelectedGenre} genres={genres} />
        </div>

        <Flex justify="center" style={{ width: "100%" }}>
          <Movies
            movies={movies.data}
            image={imageUrl}
            filter={filter}
            genres={genres}
            selectedGenre={selectedGenre}
          />
        </Flex>
      </Flex>
    </div>
  );
}
