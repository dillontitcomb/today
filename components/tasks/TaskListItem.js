import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '../layout/Buttons';
import { List } from '../layout/Lists';
import { fetcher } from '../../utils/helperFunctions';
import { mutate } from 'swr';

const StyledTask = styled.div`
  display: grid;
  grid-template-columns: 3fr auto;
  padding: 0.2rem 1rem;
`;

const TaskName = styled.div`
  text-align: left;
  justify-self: start;
  display: flex;
  align-items: center;
`;

const TaskButton = styled.div`
  justify-self: end;
`;

const TaskScore = styled.div`
  margin: auto 0.5rem auto 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) =>
    props.score > 0 && props.score < 3
      ? props.theme.colors.midGrey
      : props.score >= 3 && props.score < 6
      ? props.theme.colors.dangerDulled
      : props.theme.colors.danger};
`;

export default function TaskListItem({ task }) {
  async function handleDeleteTask(e) {
    console.log('Trying to delete task');
    e.preventDefault();
    const deletedTask = await fetcher(`/api/tasks/${e.target.value}`, {
      method: 'DELETE',
      body: {},
    });
    mutate('/api/tasks');
  }

  return (
    <div>
      <StyledTask key={task._id}>
        <TaskName>
          <TaskScore score={task.score}>{task.score}</TaskScore>
          <span>{task.name}</span>
        </TaskName>
        <TaskButton>
          <Button small>
            <Link href={`/tasks/${task._id}`}>
              <a>More</a>
            </Link>
          </Button>
          <Button
            onClick={handleDeleteTask}
            small
            buttonstyle='secondary'
            value={task._id}
          >
            Delete
          </Button>
        </TaskButton>
      </StyledTask>
    </div>
  );
}
