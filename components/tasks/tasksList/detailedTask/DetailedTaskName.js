import TaskScore from '../TaskScore';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

const TaskText = styled.span`
  color: ${({ theme }) => theme.colors.midText};
`;

export default function DetailedTaskName({ task }) {
  return (
    <Container>
      <TaskScore score={task.score}></TaskScore>
      <TaskText>{task.name}</TaskText>
    </Container>
  );
}
