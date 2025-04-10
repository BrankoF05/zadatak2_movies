import React from "react";
import { Layout, Typography } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;
const { Title } = Typography;

export default function NavBar() {
  return (
    <Layout>
      <Header style={{ backgroundColor: "whitesmoke", height: "100px" }}>
        <Title
          level={1}
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          <Link to="/">Movies</Link>
        </Title>
      </Header>
    </Layout>
  );
}
