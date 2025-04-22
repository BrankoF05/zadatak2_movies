import React, { useEffect } from "react";
import { Layout, Typography } from "antd";
import { Link } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import { logout, loadUser } from "../features/login/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const { Header } = Layout;
const { Title } = Typography;

export default function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
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
          <LogoutOutlined
            style={{ fontSize: "20px" }}
            onClick={() => dispatch(logout())}
          />
        ) : (
          <Title
            level={1}
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
