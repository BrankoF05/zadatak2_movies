import React from "react";
import { Flex, Col, Carousel, Card, Space, Rate, Divider } from "antd";

export default function MovieInformation({ images, imageUrl, movie }) {
  return (
    <Flex wrap justify="center" gap="large">
      <Col xs={24} sm={24} md={11} lg={{ span: 5 }}>
        <Carousel
          // style={{ width: "400px" }}
          // arrows
          autoplay
          autoplaySpeed={2000}
          // autoplay={{ dotDuration: true }}
          dots={false}
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
      </Col>
      <Col xs={24} sm={24} md={12} lg={{ span: 10 }}>
        {" "}
        <Card hoverable style={{ cursor: "auto" }}>
          <h1>{movie && movie.title}</h1>
          <Space>
            <Rate
              disabled="true"
              value={movie && movie.vote_average}
              count={10}
            />
            <h3>{movie && movie.vote_average}</h3>
          </Space>

          <p>{movie && movie.tagline}</p>
        </Card>
        <Divider />
        <Card hoverable style={{ cursor: "auto" }}>
          <h2>Genres</h2>

          <Space>
            {movie && movie.genres.map((genre) => <p>{genre.name}</p>)}
          </Space>
        </Card>
        <Divider dashed />
        <Card hoverable style={{ cursor: "auto" }}>
          <h2>Description</h2>
          <p>{movie && movie.overview}</p>
        </Card>
      </Col>
    </Flex>
  );
}
