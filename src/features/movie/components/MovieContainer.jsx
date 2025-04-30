import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../slices/movieSlice";
import Movie from "./Movie";
import NavBar from "../../../components/NavBar";
import { Empty, Flex } from "antd";
import Loading from "../../../components/Loading";

export default function MovieContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovie(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  return (
    <div>
      <NavBar />
      {movie.isError && (
        <Flex justify="center" align="center" style={{ height: "100vh" }}>
          <Empty />
        </Flex>
      )}{" "}
      {movie.isLoading ? <Loading /> : <Movie movie={movie.data} />}
    </div>
  );
}
