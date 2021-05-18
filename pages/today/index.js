import styled from 'styled-components';
import { TriplePane } from '../../components/layout/Wrappers';
import { List } from '../../components/layout/Lists';
import useGlobalContext from '../../hooks/useGlobalContext';
import { useEffect } from 'react';

const DayContainer = styled.div``;
const HabitsContainer = styled.div``;
const TasksContainer = styled.div``;
export default function today() {
  const { getTasks, tasks, getHabits, habits, getToday, today } =
    useGlobalContext();

  useEffect(() => {
    getTasks();
    getHabits();
    getToday();
  }, []);

  console.log('Today?', today);

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
          <p>Item one :)</p>
        </List>
      </DayContainer>
      <TasksContainer>
        <h3>Tasks</h3>
        <List marginsm>
          {tasks && tasks.map((task) => <p key={task._id}>{task.name}</p>)}
        </List>
      </TasksContainer>
    </TriplePane>
  );
}
