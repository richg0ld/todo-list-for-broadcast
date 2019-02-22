import React, { useState } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import TodoList from "./components/Todolist";
import InsertTodo from "./components/InsertTodo";
import GlobalStyle from "./styles/GlobalStyle";

const Header = styled.header`
  background-color: #2e3347;
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
  color: #ffffff;
`;

const getTodoListCookieString = list => {
  return list.reduce(
    (acc, cur) =>
      `${acc && `${acc}|`}${cur.id},${cur.title},${cur.description},${
        cur.status
      }`,
    ""
  );
};

const newTodoData = (title, description) => {
  let ranStr = "";
  for (let i = 1; i <= 6; i++) {
    ranStr += parseInt(Math.random() * 10);
  }
  const id = `todo${ranStr}`;
  const status = "TODO";
  return {
    id,
    title,
    description,
    status
  };
};

const getInitList = tdl => {
  return tdl
    ? tdl.split("|").map(str => {
        const [id, title, description, status] = str.split(",");
        return {
          id,
          title,
          description,
          status
        };
      })
    : [];
};

const App = () => {
  const tdl = Cookies.get("tdl");
  const initList = getInitList(tdl);
  const [list, setList] = useState(initList);

  const SaveList = list => {
    setList(list);
    //tdl: todolist cookie key 명.
    Cookies.set("tdl", getTodoListCookieString(list));
  };

  const onSubmit = (title, description) => {
    const newList = [...list, newTodoData(title, description)];
    setList(newList);
    SaveList(newList);
  };

  const onChange = (e, id) => {
    const newList = list.map(todo =>
      todo.id === id
        ? {
            ...todo,
            status: e.target.checked ? "FINISH" : "TODO"
          }
        : todo
    );
    SaveList(newList);
  };

  const onDelete = (e, id) => {
    console.log(id);
    const newList = list.filter(todo => todo.id !== id);
    SaveList(newList);
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <Header>TodoList App</Header>
        <InsertTodo onSubmit={onSubmit} />
        <TodoList list={list} onToggleFinish={onChange} onDelete={onDelete} />
      </div>
    </>
  );
};

export default App;
