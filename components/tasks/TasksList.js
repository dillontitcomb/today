import Link from 'next/link';
import styled from 'styled-components';
import { Button } from '../layout/Buttons';

const StyledTask = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 0.2rem 1rem;
`;

const TaskName = styled.div`
  text-align: left;
  justify-self: start;
`;
const TaskButton = styled.div`
  justify-self: end;
`;

export default function TasksList({ tasks }) {
  return (
    <>
      {tasks &&
        tasks.map((task) => {
          return (
            <StyledTask key={task._id}>
              <TaskName>{task.name}</TaskName>
              <TaskButton>
                <Button buttonstyle='primary' small>
                  <Link href={`/tasks/${task._id}`}>
                    <a>More</a>
                  </Link>
                </Button>
              </TaskButton>
            </StyledTask>
          );
        })}
    </>
  );
}
