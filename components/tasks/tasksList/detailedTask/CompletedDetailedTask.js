import styled from 'styled-components';
import DetailedTaskName from './DetailedTaskName';
import DetailedTaskInfo from './DetailedTaskInfo';
import DetailedTaskComplete from './DetailedTaskComplete';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 0.5rem;
`;

export default function CompletedDetailedTask({ task }) {
  return (
    <Container>
      <DetailedTaskName task={task} />
      <DetailedTaskInfo task={task} />
      <DetailedTaskComplete task={task} />
    </Container>
  );
}
