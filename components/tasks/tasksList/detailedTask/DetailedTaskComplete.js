import styled from 'styled-components';
import { useState } from 'react';
const Container = styled.div`
  place-self: end;
  display: flex;
  height: 100%;
  align-items: center;
`;
const Checkbox = styled.input`
  height: 1.2rem;
  width: 1.2rem;
`;
// TODO: make checkbox a complete button

export default function DetailedTaskComplete({ task }) {
  const [complete, setComplete] = useState(task.complete);

  function handleComplete(e) {
    e.stopPropagation();
    setComplete(!complete);
  }

  return (
    <Container>
      <Checkbox
        type='checkbox'
        checked={complete}
        onChange={handleComplete}
        onClick={(e) => e.stopPropagation()}
      ></Checkbox>
    </Container>
  );
}
