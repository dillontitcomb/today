import Link from 'next/link';
import styled from 'styled-components';
import useTasksContext from '../../../hooks/useTasksContext';
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
  const { deleteTask, markTaskComplete } = useTasksContext();

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
