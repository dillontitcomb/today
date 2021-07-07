import { useSession } from 'next-auth/client';
import { Title } from '../../components/layout/Typography';
import { Button } from '../../components/layout/Buttons';
import SimpleAddTask from '../../components/tasks/SimpleAddTask';
import TasksList from '../../components/tasks/tasksList/TasksList';
import useGlobalContext from '../../hooks/useGlobalContext';
import { useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../../components/layout/Modal';

const TasksContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const TasksTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export default function tasks() {
  const [session, loading] = useSession();

  if (!loading && !session) return <p>Access Denied</p>;

  const { tasks, getTasks, showModal, openModal } = useGlobalContext();

  useEffect(() => {
    getTasks();
  }, []);

  function handleOpenModal(e) {
    console.log('Opening Modal!');
    openModal();
  }

  return (
    <>
      <TasksContainer>
        <TasksTitle>
          <Title weight='bolder' primary>
            Your Tasks
          </Title>
          <Button buttonstyle='secondary' onClick={handleOpenModal}>
            Add New
          </Button>
        </TasksTitle>
        <TasksList tasks={tasks}></TasksList>
      </TasksContainer>
      {showModal ? (
        <Modal>
          <SimpleAddTask></SimpleAddTask>
        </Modal>
      ) : (
        ''
      )}
    </>
  );
}
