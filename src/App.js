import { useContext, useEffect, useState } from "react";
import TodosList from "./components/TodosList";
import TodoComposer from "./components/TodoComposer";
import styled from "styled-components";
import { TodoStorageContext } from "./providers/storage";

const Container = styled.div`
  width: 600px;
  padding: 24px;
`;

function NoItems() {
  return <div>There are no todo items. Try creating some.</div>;
}

function App() {
  const { todos, createTodo } = useContext(TodoStorageContext);

  return (
    <Container>
      <TodoComposer onSubmit={(text) => createTodo({ text })} />
      {todos?.length > 0 ? <TodosList todos={todos} /> : <NoItems />}
    </Container>
  );
}

export default App;
