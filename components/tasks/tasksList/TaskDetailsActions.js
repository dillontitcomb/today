import Link from 'next/link';
import styled from 'styled-components';
import useGlobalContext from '../../../hooks/useGlobalContext';
import { Button, DeleteButton, SuccessButton } from '../../layout/Buttons';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  grid-gap: 0.5rem;
`;

export default function TaskDetailsActions({ task }) {
  const { deleteTask, markTaskComplete } = useGlobalContext();

  async function handleDeleteTask(e) {
    console.log('Trying to delete task');
    deleteTask(task._id);
  }

  async function handleMarkTaskComplete() {
    console.log('Trying to mark task complete');
    markTaskComplete(task._id);
  }

  return (
    <ButtonContainer>
      <SuccessButton small $fill onClick={handleMarkTaskComplete}>
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
