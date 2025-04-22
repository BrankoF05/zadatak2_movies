import React from "react";
import { Flex, Empty } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        height: "100vh",
      }}
    >
      {/* <h1 style={{ fontSize: "82px" }}>Loading...</h1> */}
      <LoadingOutlined style={{ fontSize: "100px" }} />
    </Flex>
  );
}
