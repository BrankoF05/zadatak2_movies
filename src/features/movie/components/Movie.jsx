import React from "react";

export default function Movie({ movie }) {
  return (
    <div>
      <h1>{movie && movie.title}</h1>
    </div>
  );
}
