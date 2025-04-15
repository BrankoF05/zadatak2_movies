import React from "react";
import { Input } from "antd";
import { memo } from "react";

function SearchInput({ setFilter }) {
  console.log("Search input");

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

export default memo(SearchInput);
