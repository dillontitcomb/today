import styled from 'styled-components';
import { TriplePane } from '../../components/layout/Wrappers';
import { List } from '../../components/layout/Lists';
import useGlobalContext from '../../hooks/useGlobalContext';
import { useEffect } from 'react';
import { Button } from '../../components/layout/Buttons';

const TodayPlaceholder = styled.div`
  padding: 0.8rem;
  text-align: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HabitTask = styled.span`
  display: block;
  padding-left: 3rem;
`;

const DayContainer = styled.div``;
const HabitsContainer = styled.div``;
const TasksContainer = styled.div``;
export default function today() {
  const {
    getTasks,
    tasks,
    getActiveHabits,
    habits,
    getToday,
    day,
    assignTaskToDay,
    assignHabitToToday,
    unassignTask,
  } = useGlobalContext();

  useEffect(() => {
    getTasks();
    getActiveHabits();
    getToday();
  }, []);

  function checkState() {
    console.log('TODAY:', day);
    console.log('TASKS:', tasks);
    console.log('HABITS:', habits);
  }

  function handleAssignTask(e) {
    const taskId = e.currentTarget.getAttribute('id');
    assignTaskToDay(taskId, day);
  }

  function handleAssignHabit(e) {
    const habitId = e.currentTarget.getAttribute('id');
    assignHabitToToday(habitId, day);
  }

  function handleUnassignTask(e) {
    const taskId = e.currentTarget.getAttribute('id');
    console.log('Handling unassign task ', taskId);
    unassignTask(taskId, tasks, day);
  }

  return (
    <TriplePane>
      <HabitsContainer>
        <h3>Habits</h3>
        <List marginsm>
          {habits &&
            habits.map((habit) => (
              <div onClick={handleAssignHabit} id={habit._id} key={habit._id}>
                <p>{habit.name}</p>
                {habit.tasks.length > 0
                  ? habit.tasks.map((task) => (
                      <HabitTask>- {task.name}</HabitTask>
                    ))
                  : ''}
              </div>
            ))}
        </List>
      </HabitsContainer>
      <DayContainer>
        <h3>Assigned Today</h3>
        <List marginsm>
          {day.tasks?.length > 0 ? (
            day.tasks.map((task) => (
              <p key={task._id} id={task._id} onClick={handleUnassignTask}>
                {task.name}
              </p>
            ))
          ) : (
            <TodayPlaceholder>No tasks assigned yet :)</TodayPlaceholder>
          )}
        </List>
      </DayContainer>
      <TasksContainer>
        <h3>Tasks</h3>
        <List marginsm>
          {tasks &&
            tasks.map((task) => (
              <p onClick={handleAssignTask} id={task._id} key={task._id}>
                {task.name}
              </p>
            ))}
        </List>
      </TasksContainer>
      <Button onClick={checkState}>Check State</Button>
    </TriplePane>
  );
}
