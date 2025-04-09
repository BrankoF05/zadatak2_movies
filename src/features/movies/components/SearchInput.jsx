import React from "react";
import { Input } from "antd";

export default function SearchInput({ setFilter }) {
  function submitChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div>
      <Input
        placeholder="Search by title"
        allowClear="true"
        onChange={submitChange}
        size="large"
      />
    </div>
  );
}
