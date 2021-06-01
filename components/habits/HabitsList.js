import HabitItem from './HabitItem';
import { List } from '../../components/layout/Lists';
import styled from 'styled-components';

const HabitsListContainer = styled.div`
  padding: 1rem;
`;

export default function HabitsList({ habits }) {
  return (
    <HabitsListContainer>
      <h1>Your Habits</h1>
      <List>
        {habits &&
          habits.map((habit) => {
            return <HabitItem habit={habit} key={habit._id}></HabitItem>;
          })}
      </List>
    </HabitsListContainer>
  );
}
