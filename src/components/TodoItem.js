import { useContext } from "react";
import styled from "styled-components";
import { TodoStorageContext } from "../providers/storage";

const TodoItemContainer = styled.div`
  padding: 12px 16px;
`;

function TodoItem({ todo }) {
  const { toggleState } = useContext(TodoStorageContext);

  return (
    <TodoItemContainer>
      <div>{todo.text}</div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => toggleState(todo.id, !todo.completed)}
      />
    </TodoItemContainer>
  );
}

export default TodoItem;
