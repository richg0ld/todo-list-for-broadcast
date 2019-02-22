import React from "react";
import Todo from "./Todo";

const TodoList = ({ list, onToggleFinish, onDelete }) => {
  return (
    <div>
      {list.map((todo, i) => (
        <Todo
          key={i}
          {...todo}
          onToggleFinish={onToggleFinish}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
