import { Col, Flex } from "antd";
import React from "react";
import Youtube from "react-youtube";

export default function MovieTrailer({ videos }) {
  return (
    <>
      {videos && videos.results.length > 0 ? (
        <Flex
          wrap
          justify="center"
          align="center"
          gap="large"
          style={{
            backgroundColor: "black",
            color: "whitesmoke",
            padding: "200px 0px",
          }}
        >
          <Col xs={24} sm={24} md={24} lg={8}>
            <h1 style={{ fontSize: "82px" }}>Watch the offical trailer!</h1>
          </Col>
          <Col xs={24} sm={24} md={24} lg={7}>
            {videos ? (
              (() => {
                const officialTrailer = videos.results.find((video) =>
                  // video.name.includes("Official") &&
                  video.name.includes("Trailer")
                );
                if (officialTrailer) {
                  return <Youtube videoId={officialTrailer.key} />;
                } else {
                  return <h1>No video found</h1>;
                }
              })()
            ) : (
              <h1>No videos available</h1>
            )}
          </Col>
        </Flex>
      ) : null}
    </>
  );
}
