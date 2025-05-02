import React from "react";

import NavBar from "../../../components/NavBar";
import { Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "./Login";
export default function LoginContainer() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user.error);
  }, [user]);

  if (user.isLogged) {
    navigate("/");
  }

  return (
    <Flex vertical style={{ width: "100%" }} gap={100}>
      <NavBar />
      <Login user={user} dispatch={dispatch} />
    </Flex>
  );
}
