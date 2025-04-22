import React, { useState } from "react";
import NavBar from "../../../components/NavBar";
import { Input, Button, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, loadUser } from "../slices/loginSlice";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const onFinish = (values) => {
    dispatch(login(values));
    console.log(user.user);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (user.isLogged) {
    navigate("/");
  }

  return (
    <>
      <NavBar />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          maxWidth: 900,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        {user.error && <p style={{ color: "red" }}>{user.error}</p>}

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
