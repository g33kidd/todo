import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";

const TodoContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
`;

function TodosList({ todos }) {
  return (
    <TodoContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoContainer>
  );
}

export default TodosList;
