import React from "react";
import { Rate, Divider, Flex, Row, Col } from "antd";

export default function Movie({ movie }) {
  console.log("Movie from page", movie);
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <Flex style={{ width: "100%" }} align="center">
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <img
              src={movie && imageUrl + movie.poster_path}
              alt={movie && movie.title}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            {" "}
            <h1>{movie && movie.title}</h1>
            <Rate
              disabled="true"
              value={movie && movie.vote_average}
              count={10}
            />
            <p>{movie && movie.tagline}</p>
            <Divider />
            <div className="genres">
              {movie && movie.genres.map((genre) => <p>{genre.name}</p>)}
            </div>
            <Divider dashed />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
              merninisti licere mihi ista probare, quae sunt a te dicta? Refert
              tamen, quo modo.
            </p>
          </Col>
        </Row>
      </Flex>
    </div>
  );
}
