import React from "react";
import { Card, Flex, Avatar, Row, Rate, Divider, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function MovieReviews({ reviews }) {
  const imageUrl = "https://image.tmdb.org/t/p/w200";
  return (
    <Flex align="center" justify="center" vertical style={{ width: "100%" }}>
      {reviews && <h1 style={{ fontSize: "52px" }}>Reviews</h1>}
      <Row gutter={[16, 16]} style={{ width: "80%", padding: "10px" }}>
        {reviews && reviews.results.length > 0 ? (
          reviews.results.map((review) => (
            <Col key={review.id} xs={24} sm={24} md={12} lg={8}>
              <Card key={review.id}>
                {review.author_details.avatar_path != null ? (
                  <Avatar
                    size="large"
                    src={imageUrl + review.author_details.avatar_path}
                  />
                ) : (
                  <Avatar size="large" icon={<UserOutlined />} />
                )}
                <h1>{review.author_details.username}</h1>
                <Rate
                  allowHalf
                  disabled="true"
                  value={review && review.author_details.rating}
                  count={10}
                />
                <Divider />
                <p>{review.content}</p>
              </Card>
            </Col>
          ))
        ) : (
          <h2>No reviews found</h2>
        )}
      </Row>
    </Flex>
  );
}
