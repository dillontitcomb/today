import Link from 'next/link';
import styled from 'styled-components';
import { mutate } from 'swr';
import { fetcher } from '../../../utils/helperFunctions';
import { Button } from '../../layout/Buttons';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  grid-gap: 0.5rem;
`;

const DeleteButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.danger};
  color: ${(props) => props.theme.colors.lightText};
  &:hover {
    background-color: ${(props) => props.theme.colors.dangerDulled};
  }
`;
const SuccessButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.success};
  color: ${(props) => props.theme.colors.lightText};
  &:hover {
    background-color: ${(props) => props.theme.colors.successLight};
  }
`;

export default function TaskDetailsActions({ task }) {
  async function handleDeleteTask(e) {
    console.log('Trying to delete task');
    e.preventDefault();
    const deletedTask = await fetcher(`/api/tasks/${task._id}`, {
      method: 'DELETE',
      body: {},
    });
    mutate('/api/tasks');
  }

  //TODO: Put request to mark a task completed
  async function handleCompleteTask() {
    console.log('Trying to mark task complete');
    const updatedTask = await fetcher(`/api/tasks/${task._id}`, {
      method: 'PUT',
      body: JSON.stringify({ complete: true, dateComplete: Date.now() }),
    });
    mutate('/api/tasks');
  }

  return (
    <ButtonContainer>
      <SuccessButton small $fill onClick={handleCompleteTask}>
        Complete
      </SuccessButton>
      <Button small $fill>
        <Link href={`/tasks/${task._id}`}>
          <a>Edit</a>
        </Link>
      </Button>
      <DeleteButton small $fill onClick={handleDeleteTask}>
        Delete
      </DeleteButton>
    </ButtonContainer>
  );
}
