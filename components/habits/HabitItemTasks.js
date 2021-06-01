import styled from 'styled-components';

const TasksContainer = styled.div`
  padding-left: 3rem;
`;

const Task = styled.span`
  display: block;
  font-size: 0.8rem;
`;

export default function HabitItemTasks({ tasks }) {
  return (
    <TasksContainer>
      {tasks.map((task) => (
        <Task key={task._id}>- {task.name}</Task>
      ))}
    </TasksContainer>
  );
}
