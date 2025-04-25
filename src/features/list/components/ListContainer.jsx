import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../slices/listSlice";
import NavBar from "../../../components/NavBar";
import List from "./List";

export default function ListContainer() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  console.log(list);

  return (
    <>
      <NavBar />
      <List user={user} list={list} />
    </>
  );
}
