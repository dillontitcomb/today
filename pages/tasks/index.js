import { useSession } from 'next-auth/client';
import { Title } from '../../components/layout/Typography';
import { Container, SplitPane } from '../../components/layout/Wrappers';
import { Button } from '../../components/layout/Buttons';
import SimpleAddTask from '../../components/tasks/SimpleAddTask';
import TasksList from '../../components/tasks/tasksList/TasksList';
import useGlobalContext from '../../hooks/useGlobalContext';
import { useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../../components/layout/Modal';
import { useState } from 'react';

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
  const [showModal, setShowModal] = useState(false);

  if (!loading && !session) return <p>Access Denied</p>;

  const { tasks, getTasks } = useGlobalContext();

  useEffect(() => {
    getTasks();
  }, []);

  function handleToggleModal(e) {
    console.log('Toggling Modal!');
    setShowModal(!showModal);
  }

  return (
    <>
      <TasksContainer>
        <TasksTitle>
          <Title weight='bolder' primary>
            Your Tasks
          </Title>
          <Button buttonstyle='secondary' onClick={handleToggleModal}>
            Add New
          </Button>
        </TasksTitle>
        <TasksList tasks={tasks}></TasksList>
      </TasksContainer>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <SimpleAddTask></SimpleAddTask>
        </Modal>
      ) : (
        ''
      )}
    </>
  );
}
