import React from "react";

export default function List({ user, list }) {
  return (
    <>
      {user && (
        <div>
          {list.data &&
            list.data.items.map((item) => {
              return <p key={item.id}>{item.title}</p>;
            })}
        </div>
      )}
    </>
  );
}
