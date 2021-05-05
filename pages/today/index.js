import styled from 'styled-components';
import useHabits from '../../hooks/useHabits';
import useTasks from '../../hooks/useTasks';
import useToday from '../../hooks/useToday';
import { TriplePane } from '../../components/layout/Wrappers';
import { List } from '../../components/layout/Lists';

const DayContainer = styled.div``;
const HabitsContainer = styled.div``;
const TasksContainer = styled.div``;
export default function today() {
  const { today, todayLoading, todayError } = useToday();
  const { habits, habitsLoading, habitsError } = useHabits();
  const { tasks, tasksLoading, tasksError } = useTasks();

  if (!today || !tasks || !habits) return <p>Loading...</p>;
  console.log(today);
  console.log(habits);
  console.log(tasks);

  return (
    <TriplePane>
      <HabitsContainer>
        <h3>Habits</h3>
        <List marginsm>
          {habits && habits.map((habit) => <p key={habit._id}>{habit.name}</p>)}
        </List>
      </HabitsContainer>
      <DayContainer>
        <h3>Assigned Today</h3>
        <List marginsm>
          <p>Item One</p>
          <p>Item Two</p>
          <p>Item Three</p>
        </List>
      </DayContainer>
      <TasksContainer>
        <h3>Tasks</h3>
        <List marginsm>
          <p>Item One</p>
          <p>Item Two</p>
          <p>Item Three</p>
        </List>
      </TasksContainer>
    </TriplePane>
  );
}
