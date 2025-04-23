import NavBar from "../../../components/NavBar";
import { Input, Button, Form, Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/loginSlice";
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
    <Flex vertical style={{ width: "100%" }} gap={100}>
      <NavBar />
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
            {user.error && <p style={{ color: "red" }}>{user.error}</p>}
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
}
