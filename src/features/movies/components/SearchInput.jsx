import React from "react";
import { Input } from "antd";

export default function SearchInput({ setFilter }) {
  function submitChange(e) {
    setFilter(e);
  }

  return (
    <div>
      <Input.Search
        style={{ margin: "20px" }}
        allowClear="true"
        onSearch={submitChange}
        size="large"
      />
    </div>
  );
}
