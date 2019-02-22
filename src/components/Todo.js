import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background-color: #161a2b;
  color: #ffffff;
  border-top: 1px solid #3e3f5c;
  &:first-child {
    border-top: 0;
  }
`;

const H2 = styled.h2`
  font-size: 22px;
  font-weight: bold;
`;
const P = styled.h2`
  font-size: 12px;
  line-height: 26px;
`;

const Label = styled.label`
  font-size: 12px;
`;

const DeleteButton = styled.button.attrs({ type: "button" })`
  font-size: 12px;
  padding: 2px;
  background-color: #232738;
  border: 1px solid #3e3f5c;
  color: #ffffff;
`;

const Controller = styled.div`
  margin-top: 10px;
`;

const Todo = ({ id, title, description, status, onToggleFinish, onDelete }) => {
  return (
    <Container>
      <H2>{title}</H2>
      <P>{description}</P>
      <Controller>
        <Label>
          <input
            type="checkbox"
            checked={status === "FINISH"}
            name="todo"
            onChange={e => onToggleFinish(e, id)}
          />
          완료
        </Label>
        <DeleteButton onClick={e => onDelete(e, id)}>삭제</DeleteButton>
      </Controller>
    </Container>
  );
};

export default Todo;
