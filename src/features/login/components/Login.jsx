import { Input, Button, Form, Flex } from "antd";
import { login } from "../slices/loginSlice";

export default function Login({ user, dispatch }) {
  const onFinish = (values) => {
    dispatch(login(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Flex
      vertical
      align="center"
      style={{
        alignSelf: "center",
      }}
    >
      <h1>Login</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          padding: "50px",
          maxWidth: 900,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
        <Form.Item>
          {user && user.error !== null && (
            <p style={{ color: "red" }}>{user.error}</p>
          )}
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
}
