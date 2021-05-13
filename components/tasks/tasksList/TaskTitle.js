import TaskScore from './TaskScore';
import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export default function TaskTitle({ task }) {
  return (
    <TitleContainer>
      <TaskScore score={task.score}></TaskScore>
      <span>{task.name}</span>
    </TitleContainer>
  );
}
