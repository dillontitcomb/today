import styled from 'styled-components';
import useHabits from '../../hooks/useHabits';
import useTasks from '../../hooks/useTasks';
import useToday from '../../hooks/useToday';
import HabitItem from '../../components/habits/HabitItem';

const TodayContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const DayContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;

export default function today() {
  const { today, todayLoading, todayError } = useToday();
  const { habits, habitsLoading, habitsError } = useHabits();
  const { tasks, tasksLoading, tasksError } = useTasks();

  if (!today || !tasks || !habits) return <p>Loading...</p>;
  console.log(today);
  console.log(habits);
  console.log(tasks);

  return (
    <TodayContainer>
      <div>
        <h3>Habits</h3>
        {habits && habits.map((habit) => <p key={habit._id}>{habit.name}</p>)}
      </div>
      <DayContainer>
        <h3>Assigned Today</h3>
        <p>Item One</p>
        <p>Item Two</p>
        <p>Item Three</p>
      </DayContainer>
      <div>
        <h3>Tasks</h3>
        <p>Item One</p>
        <p>Item Two</p>
        <p>Item Three</p>
      </div>
    </TodayContainer>
  );
}
