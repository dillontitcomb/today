import styled from 'styled-components';
import TaskDetailsActions from './TaskDetailsActions';
import TaskDetailsContent from './TaskDetailsContent';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0.5rem;
  margin-top: 0.2rem;
`;

export default function TaskDetails({ task }) {
  return (
    <DetailsContainer>
      <TaskDetailsContent task={task} />
      <TaskDetailsActions task={task} />
    </DetailsContainer>
  );
}
