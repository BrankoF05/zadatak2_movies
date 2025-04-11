import React from "react";
import { Divider, Flex } from "antd";
import MovieReviews from "./MovieReviews";
import MovieInformation from "./MovieInformation";
import MovieTrailer from "./MovieTrailer";

export default function Movie({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div style={{ marginTop: "20px" }}>
      <Flex style={{ width: "100%" }} vertical>
        <MovieInformation
          images={movie && movie.images}
          imageUrl={movie && imageUrl}
          movie={movie && movie}
        />
        <Divider />
        <MovieTrailer videos={movie && movie.videos} />
        <Divider />
        <MovieReviews reviews={movie && movie.reviews} />
      </Flex>
    </div>
  );
}
