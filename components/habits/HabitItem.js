import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Container } from '../layout/Wrappers';

const HabitItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2rem 0.5rem;
  &:hover {
    background-color: white;
    cursor: pointer;
  }
`;

const WarningContainer = styled.div`
  color: ${({ theme }) => theme.colors.danger};
`;

const WarningText = styled.span`
  padding: 0.4rem;
`;

const HabitText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
`;

const TaskItem = styled.span`
  font-size: 0.8rem;
  display: block;
  margin-left: 2rem;
`;

export default function HabitItem({ habit }) {
  return (
    <Container offwhite>
      <Link href={`/habits/${habit._id}`}>
        <HabitItemContainer>
          <HabitText>{habit.name}</HabitText>
          {habit.tasks.length == 0 && (
            <WarningContainer>
              <FontAwesomeIcon icon={faTimes} />
              <WarningText>Needs Task</WarningText>
            </WarningContainer>
          )}
        </HabitItemContainer>
      </Link>
      {habit.tasks &&
        habit.tasks.map((task) => (
          <TaskItem key={task._id}>{task.name}</TaskItem>
        ))}
    </Container>
  );
}
