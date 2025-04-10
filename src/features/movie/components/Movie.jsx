import React from "react";
import { Divider, Flex } from "antd";
import MovieReviews from "./MovieReviews";
import MovieInformation from "./MovieInformation";

export default function Movie({ movie, reviews, images, videos }) {
  console.log(movie);
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div style={{ marginTop: "20px" }}>
      <Flex style={{ width: "100%" }} vertical>
        <MovieInformation images={images} imageUrl={imageUrl} movie={movie} />
        <Divider />
        <MovieReviews reviews={reviews} videos={videos} />
      </Flex>
    </div>
  );
}
