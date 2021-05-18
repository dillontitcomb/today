import styled from 'styled-components';
import { TriplePane } from '../../components/layout/Wrappers';
import { List } from '../../components/layout/Lists';
import useGlobalContext from '../../hooks/useGlobalContext';
import { useEffect } from 'react';
import { Button } from '../../components/layout/Buttons';

const DayContainer = styled.div``;
const HabitsContainer = styled.div``;
const TasksContainer = styled.div``;
export default function today() {
  const { getTasks, tasks, getHabits, habits, getToday, day, moveTaskToToday } =
    useGlobalContext();

  useEffect(() => {
    getTasks();
    getHabits();
    getToday();
  }, []);

  console.log(day);

  function checkState() {
    console.log('TODAY:', day);
    console.log('TASKS:', tasks);
    console.log('HABITS:', habits);
  }

  function handleMoveTask(e) {
    const taskId = e.currentTarget.getAttribute('id');
    moveTaskToToday(taskId, day);
  }

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
          {day.tasks &&
            day.tasks.map((task) => <p key={task._id}>{task.name}</p>)}
        </List>
      </DayContainer>
      <TasksContainer>
        <h3>Tasks</h3>
        <List marginsm>
          {tasks &&
            tasks.map((task) => (
              <p onClick={handleMoveTask} id={task._id} key={task._id}>
                {task.name}
              </p>
            ))}
        </List>
      </TasksContainer>
      <Button onClick={checkState}>Check State</Button>
    </TriplePane>
  );
}
