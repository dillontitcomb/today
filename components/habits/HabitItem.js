import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import HabitItemTasks from './HabitItemTasks';

const Habit = styled.div`
  padding: 0.5rem;
`;

const HabitItemContainer = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: 2fr 1fr 1fr;
  justify-content: center;
  justify-items: stretch;
`;

const WarningContainer = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  justify-self: end;
`;

const WarningText = styled.span`
  padding: 0.4rem;
  margin-right: 0.2rem;
`;

const HabitMoreText = styled.span`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 0.8rem;
  align-self: center;
  text-align: right;
  padding: 0 0.5rem;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default function HabitItem({ habit }) {
  return (
    <Habit>
      <HabitItemContainer>
        <span>{habit.name}</span>
        {habit.tasks.length == 0 ? (
          <WarningContainer>
            <FontAwesomeIcon icon={faTimes} />
            <WarningText>Needs Task</WarningText>
          </WarningContainer>
        ) : (
          <p> </p>
        )}
        <Link href={`/habits/${habit._id}`}>
          <HabitMoreText>More -></HabitMoreText>
        </Link>
      </HabitItemContainer>
      {habit.tasks.length > 0 ? (
        <HabitItemTasks tasks={habit.tasks}></HabitItemTasks>
      ) : (
        ''
      )}
    </Habit>
  );
}
