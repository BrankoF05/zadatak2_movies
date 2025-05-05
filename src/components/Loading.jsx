import React from "react";
import { Flex } from "antd";
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
      <LoadingOutlined style={{ fontSize: "100px" }} />
    </Flex>
  );
}
