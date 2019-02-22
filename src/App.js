import React, { useState } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import TodoList from "./components/Todolist";
import InsertTodo from "./components/InsertTodo";

const Header = styled.header`
  background-color: #000000;
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
`;

const getInitList = tdl => {
  return tdl
    ? tdl.split("|").map(str => {
        const [title, description] = str.split(",");
        return {
          title,
          description
        };
      })
    : [];
};

const App = () => {
  const tdl = Cookies.get("tdl");
  const initList = getInitList(tdl);
  const [list, setList] = useState(initList);
  const onSubmit = (title, description) => {
    const newList = [
      ...list,
      {
        title,
        description
      }
    ];
    setList(newList);
    //tdl: todolist cookie key 명.
    const tdl = newList.reduce(
      (acc, cur) => `${acc && `${acc}|`}${cur.title},${cur.description}`,
      ""
    );
    Cookies.set("tdl", tdl);
  };
  return (
    <div>
      <Header>TodoList App</Header>
      <InsertTodo onSubmit={onSubmit} />
      <TodoList list={list} />
    </div>
  );
};

export default App;
