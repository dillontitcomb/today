import styled from 'styled-components';
import { useState } from 'react';
const Container = styled.div`
  place-self: end;
`;
const Checkbox = styled.input``;
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
        onClick={handleComplete}
      ></Checkbox>
    </Container>
  );
}
