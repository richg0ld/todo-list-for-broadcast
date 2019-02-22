import React, { useState } from "react";

const InsertTodo = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onSubmitHandler = e => {
    e.preventDefault();
    if (!title || !description) return;
    onSubmit(title, description);
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default InsertTodo;
