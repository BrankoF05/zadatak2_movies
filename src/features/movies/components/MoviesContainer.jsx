import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieLists, fetchMovies } from "../slices/moviesSlice";
import { fetchGenres } from "../slices/genreSlice";
import { useEffect } from "react";
import Movies from "./Movies";
import "../styles/moviesContainer.css";
import SearchInput from "./SearchInput";
import { Empty, Flex } from "antd";
import { setSelectedGenre } from "../slices/genreSlice";
import SelectGenres from "./SelectGenres";
import NavBar from "../../../components/NavBar";
import SelecList from "./SelecList";

export default function MoviesContainer() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const [filter, setFilter] = useState("");
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const selectedGenre = useSelector((state) => state.genres.selected_genre);
  const genres = useSelector((state) => state.genres.data);
  const [list, setList] = useState("");

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
  }, [dispatch]);

  const changeMovieList = useCallback(
    (event) => {
      setList(event.currentTarget.name);
      dispatch(fetchMovieLists(event.currentTarget.name));
    },
    [dispatch]
  );

  return (
    <div>
      <NavBar />
      <Flex justify="center" align="center" vertical="true">
        <div className="filters" style={{ paddingBottom: "20px" }}>
          <SearchInput setFilter={setFilter} />
          <SelectGenres
            setSelectedGenre={setSelectedGenre}
            genres={genres}
            selectedGenre={selectedGenre}
          />
          <SelecList changeMovieList={changeMovieList} list={list} />
        </div>
        {movies.isLoading ? (
          <Flex
            justify="center"
            align="center"
            style={{
              height: "100vh",
              // width: "100%",
              // backgroundColor: "black",
              // opacity: "0.5",
            }}
          >
            <h1 style={{ fontSize: "82px" }}>Loading...</h1>
            <Empty style={{ color: "red" }} />
          </Flex>
        ) : (
          <Flex justify="center" style={{ width: "100%" }}>
            <Movies
              movies={movies.data}
              image={imageUrl}
              filter={filter}
              genres={genres}
              selectedGenre={selectedGenre}
            />
          </Flex>
        )}
      </Flex>
    </div>
  );
}
