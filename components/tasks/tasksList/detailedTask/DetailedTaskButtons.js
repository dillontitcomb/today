import styled from 'styled-components';
import { Button, DeleteButton } from '../../../layout/Buttons';
import useGlobalContext from '../../../../hooks/useGlobalContext';
import { toastError } from '../../../../utils/toasts';

const ButtonContainer = styled.div`
  padding: 0.5rem 0 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
`;

export default function DetailedTaskButtons({ task }) {
  const { deleteTask, openModal, setModalType } = useGlobalContext();

  function handleDeleteTask(e) {
    console.log(`Trying to edit/delete ${task.name}`);
    deleteTask(task._id);
    toastError('Task Successfully Deleted');
  }

  function handleEditTask(e) {
    setModalType('editTask', task);
    openModal();
  }

  return (
    <ButtonContainer>
      <Button onClick={handleEditTask}>Edit Task</Button>
      <DeleteButton buttonstyle='secondary' onClick={handleDeleteTask}>
        Delete Task
      </DeleteButton>
    </ButtonContainer>
  );
}
