import React from "react";
import { Input } from "antd";

export default function SearchInput({ setFilter }) {
  function submitChange(e) {
    setFilter(e);
  }

  return (
    <div>
      <Input.Search
        placeholder="Search by title"
        allowClear="true"
        onSearch={submitChange}
        size="large"
      />
    </div>
  );
}
