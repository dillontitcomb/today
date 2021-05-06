import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '../../layout/Buttons';
import { fetcher } from '../../../utils/helperFunctions';
import { mutate } from 'swr';
import TaskScore from './TaskScore';
import { Lead } from '../../layout/Typography';
import { ListItem } from '../../layout/Lists';

const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 0.2rem;
`;

const TaskInfo = styled.div`
  text-align: left;
  justify-self: start;
  display: flex;
  align-items: center;
`;

const TaskButton = styled.div`
  justify-self: end;
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
    <ListItem>
      <TaskContainer key={task._id}>
        <TaskInfo>
          <TaskScore score={task.score} />
          <span>{task.name}</span>
        </TaskInfo>
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
      </TaskContainer>
    </ListItem>
  );
}
