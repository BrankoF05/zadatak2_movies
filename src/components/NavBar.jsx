import React, { useEffect } from "react";
import { Layout, Typography, Avatar, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { logout, loadUser } from "../features/login/slices/loginSlice";
import { useDispatch } from "react-redux";
import useAuth from "../hooks/useAuth";

const { Header } = Layout;
const { Title } = Typography;

export default function NavBar() {
  const dispatch = useDispatch();
  const user = useAuth();

  const items = [
    {
      key: "1",
      label: user.user && user.user.username,
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: <a href="/list"> Movie list </a>,
    },
    {
      key: "3",
      icon: <LogoutOutlined onClick={() => dispatch(logout())} />,
    },
  ];

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          backgroundColor: "whitesmoke",
          height: "10%",
        }}
      >
        <Title
          level={1}
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          <Link to="/">Movies</Link>
        </Title>
        {user.user ? (
          <Dropdown menu={{ items }}>
            <Space>
              <Avatar icon={<UserOutlined />} />
            </Space>
          </Dropdown>
        ) : (
          <Title
            level={3}
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            <Link to="/login">Login</Link>
          </Title>
        )}
      </Header>
    </Layout>
  );
}
