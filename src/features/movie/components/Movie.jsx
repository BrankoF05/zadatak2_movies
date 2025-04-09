import React from "react";
import { Rate, Divider, Flex, Row, Col, Carousel } from "antd";

export default function Movie({ movie, reviews, images }) {
  console.log("Movie from page", movie);
  console.log("Reviews from page", reviews);

  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <Flex style={{ width: "100%" }} vertical>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={11} lg={{ span: 5, offset: 5 }}>
            <Carousel
              style={{ width: "400px" }}
              arrows
              autoplaySpeed={3000}
              autoplay={{ dotDuration: true }}
              fade
            >
              {images ? (
                images.posters
                  .slice(0, 5)
                  .map((poster) => (
                    <img
                      key={poster.id}
                      src={poster && imageUrl + poster.file_path}
                      alt={movie && movie.title}
                    />
                  ))
              ) : (
                <h2>No images found</h2>
              )}
            </Carousel>

            {/* <img
              style={{ width: "100%" }}
              src={images && imageUrl + images.posters[0].file_path}
              alt={movie && movie.title}
            /> */}
          </Col>
          <Col xs={24} sm={24} md={12} lg={{ span: 10 }}>
            {" "}
            <h1>{movie && movie.title}</h1>
            <Rate
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
