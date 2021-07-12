import styled from 'styled-components';
import { useState } from 'react';
import useGlobalContext from '../../../../hooks/useGlobalContext';
import { toastSuccess } from '../../../../utils/toasts';

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

export default function DetailedTaskComplete({ task }) {
  const [complete, setComplete] = useState(task.complete);
  const { updateTask } = useGlobalContext();

  function handleComplete(e) {
    e.stopPropagation();
    // If incomplete, make complete; if complete, revert to incomplete
    if (!complete) {
      setComplete(!complete);
      task.complete = true;
      updateTask(task);
      toastSuccess('Task completed!');
    } else {
      setComplete(!complete);
      task.complete = false;
      updateTask(task);
      toastSuccess('Task moved to Current');
    }
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
