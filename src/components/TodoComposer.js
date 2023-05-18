import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  /* padding: 24px; */
  display: flex;
  gap: 6px;
`;

const ComposerInput = styled.input`
  /* display: block; */
  /* width: 100%; */
  font-size: 22px;
  padding: 8px 10px;
  border-radius: 6px;
`;

const Submit = styled.button`
  border-radius: 6px;
`;

function TodoComposer({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <Container>
      <ComposerInput
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Fix the cytometer or something..."
      />
      <Submit disabled={text.length > 0} onClick={(e) => onSubmit(text)}>
        Create Todo
      </Submit>
    </Container>
  );
}

export default TodoComposer;
