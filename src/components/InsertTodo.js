import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const SubmitButton = styled.button.attrs({ type: "submit" })`
  width: 50px;
  background-color: #232738;
  border: 1px solid #3e3f5c;
  color: #ffffff;
`;

const InputContainerWrapper = styled.div`
  flex: 1;
`;
const InputContainer = styled.div`
  display: flex;
  background-color: #232738;
  color: #ffffff;
  padding: 10px;
`;

const Label = styled.label`
  width: 70px;
  font-size: 20px;
`;

const Input = styled.input.attrs({ type: "text" })`
  flex: 1;
  border: 0;
  background-color: transparent;
  outline: none;
  color: #ffffff;
  font-size: 20px;
`;

const useInput = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };

  return { value, onChange, setValue };
};

const InsertTodo = ({ onSubmit }) => {
  const title = useInput("");
  const description = useInput("");
  const onSubmitHandler = e => {
    e.preventDefault();
    if (!title.value || !description.value) return;
    onSubmit(title.value, description.value);
    title.setValue("");
    description.setValue("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <Container>
        <InputContainerWrapper>
          <InputContainer>
            <Label>제목 :</Label>
            <Input {...title} />
          </InputContainer>
          <InputContainer>
            <Label>할일 :</Label>
            <Input {...description} />
          </InputContainer>
        </InputContainerWrapper>
        <SubmitButton>추가</SubmitButton>
      </Container>
    </form>
  );
};

export default InsertTodo;
