import React from "react";
import { Rate, Divider, Flex, Row, Col } from "antd";

export default function Movie({ movie, reviews }) {
  console.log("Movie from page", movie);
  console.log("Reviews from page", reviews);

  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <Flex style={{ width: "100%" }} align="center" vertical>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={11} lg={{ span: 7 }}>
            <img
              style={{ width: "100%" }}
              src={movie && imageUrl + movie.poster_path}
              alt={movie && movie.title}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={{ span: 10 }}>
            {" "}
            <h1>{movie && movie.title}</h1>
            <Rate
              style={{ backgroundcolor: "whitesmoke" }}
              disabled="true"
              value={movie && movie.vote_average}
              count={10}
            />
            <p>{movie && movie.tagline}</p>
            <Divider />
            <h2>Genres</h2>
            <div className="genres">
              {movie && movie.genres.map((genre) => <p>{genre.name}</p>)}
            </div>
            <Divider dashed />
            <h2>Description</h2>
            <p>{movie && movie.overview}</p>
          </Col>
        </Row>
        <Row>
          {reviews ? (
            reviews.results.map((review) => (
              <Col key={review.id} xs={24} sm={24} md={12} lg={8}>
                <h1>{review.author}</h1>
              </Col>
            ))
          ) : (
            <h2>No reviews found</h2>
          )}
        </Row>
      </Flex>
    </div>
  );
}
