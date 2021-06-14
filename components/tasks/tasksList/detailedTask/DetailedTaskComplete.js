import styled from 'styled-components';
import { useState } from 'react';
const Container = styled.div`
  place-self: end;
`;
const Checkbox = styled.input``;

export default function DetailedTaskComplete({ task }) {
  const [complete, setComplete] = useState(task.complete);

  function handleComplete() {
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
