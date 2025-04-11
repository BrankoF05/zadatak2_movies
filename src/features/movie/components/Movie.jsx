import React from "react";
import { Divider, Flex } from "antd";
import MovieReviews from "./MovieReviews";
import MovieInformation from "./MovieInformation";

export default function Movie({ movie }) {
  console.log(movie);
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div style={{ marginTop: "20px" }}>
      <Flex style={{ width: "100%" }} vertical>
        <MovieInformation
          images={movie.images}
          imageUrl={imageUrl}
          movie={movie}
        />
        <Divider />
        <MovieReviews reviews={movie.reviews} videos={movie.videos} />
      </Flex>
    </div>
  );
}
