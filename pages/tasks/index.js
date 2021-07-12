import { useSession } from 'next-auth/client';
import { Title } from '../../components/layout/Typography';
import { Button, RadioButtonGroup } from '../../components/layout/Buttons';
import SimpleAddTask from '../../components/tasks/SimpleAddTask';
import SimpleEditTask from '../../components/tasks/SimpleEditTask';
import TasksList from '../../components/tasks/tasksList/TasksList';
import useGlobalContext from '../../hooks/useGlobalContext';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../../components/layout/Modal';
import { getTaskScore } from '../../utils/helperFunctions';
import CompletedTasksList from '../../components/tasks/tasksList/completedTasksList';

const TasksContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 0;
`;
const TasksTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export default function tasks() {
  const [session, loading] = useSession();
  const [showCompleted, setShowCompleted] = useState(false);

  if (!loading && !session) return <p>Access Denied</p>;

  const {
    task,
    tasks,
    getTasks,
    showModal,
    openModal,
    setModalType,
    modalType,
  } = useGlobalContext();

  const currentTasks = tasks.filter(
    (task) => task.complete === false && task.active === true
  );
  const completedTasks = tasks.filter(
    (task) => task.complete === true && task.active === true
  );

  useEffect(() => {
    getTasks();
  }, []);

  function handleOpenModal(e) {
    console.log('Opening Modal!');
    setModalType('addTask', {});
    openModal();
  }

  function handleShowCurrentTasks() {
    setShowCompleted(false);
  }
  function handleShowCompletedTasks() {
    setShowCompleted(true);
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
          <RadioButtonGroup>
            <Button
              className={showCompleted ? '' : 'active'}
              noradius
              onClick={handleShowCurrentTasks}
            >
              Current
            </Button>
            <Button
              className={showCompleted ? 'active' : ''}
              noradius
              onClick={handleShowCompletedTasks}
            >
              Completed
            </Button>
          </RadioButtonGroup>
        </TasksTitle>
        
        {showCompleted ? (
          <CompletedTasksList tasks={completedTasks}></CompletedTasksList>
        ) : (
          <TasksList tasks={currentTasks}></TasksList>
        )}
      </TasksContainer>
      {showModal ? (
        <Modal>
          {modalType === 'addTask' ? (
            <SimpleAddTask></SimpleAddTask>
          ) : (
            <SimpleEditTask task={task}></SimpleEditTask>
          )}
        </Modal>
      ) : (
        ''
      )}
    </>
  );
}
