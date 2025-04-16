import React from "react";
import { Flex, Empty } from "antd";

export default function Loading() {
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "82px" }}>Loading...</h1>
      <Empty />
    </Flex>
  );
}
