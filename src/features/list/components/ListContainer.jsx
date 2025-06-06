import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../slices/listSlice";
import NavBar from "../../../components/NavBar";
import { Col, Flex, Row } from "antd";
import { fetchGenres } from "../../movies/slices/genreSlice";
import MovieCard from "../../../components/MovieCard";
import Loading from "../../../components/Loading";
import useAuth from "../../../hooks/useAuth";

export default function ListContainer() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const navigate = useNavigate();
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const genres = useSelector((state) => state.genres.data);
  const user = useAuth();
  // useEffect(() => {
  //   if (user.user === null) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);

  useEffect(() => {
    dispatch(fetchList());
    dispatch(fetchGenres());
  }, [dispatch]);

  if (user && !user.user) {
    navigate("/");
  }

  return (
    <>
      <NavBar />
      {list && list.isLoading ? (
        <Loading />
      ) : (
        <Flex align="center" vertical>
          <h1>
            {list.data && list.data.name} by {list.data && list.data.created_by}
          </h1>
          <Row gutter={[16, 16]} style={{ width: "70%", padding: "10px" }}>
            {list.data &&
              list.data.items.map((movie) => (
                <Col key={movie.id} xs={24} sm={24} md={12} lg={6}>
                  <MovieCard
                    list={list ? list : null}
                    movie={movie}
                    navigate={navigate}
                    image={imageUrl}
                    genres={genres}
                  />
                </Col>
              ))}
          </Row>
        </Flex>
      )}
    </>
  );
}
