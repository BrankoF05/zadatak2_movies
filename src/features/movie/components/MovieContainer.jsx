import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../slices/movieSlice";
import Movie from "./Movie";
import NavBar from "../../../components/NavBar";
import { Empty, Flex } from "antd";

export default function MovieContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  return (
    <div>
      <NavBar />
      {movie.isError && (
        <Flex justify="center" align="center" style={{ height: "100vh" }}>
          <Empty />
        </Flex>
      )}{" "}
      {movie.isLoading ? (
        <Flex justify="center" align="center" style={{ height: "100vh" }}>
          <h1 style={{ fontSize: "82px" }}>Loading...</h1>
          <Empty />
        </Flex>
      ) : (
        <Movie movie={movie.data} />
      )}
    </div>
  );
}
