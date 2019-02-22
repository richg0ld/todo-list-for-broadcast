import React from "react";

const TodoList = ({ list }) => {
  return (
    <div>
      {list.map((todo, i) => (
        <div key={i}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
