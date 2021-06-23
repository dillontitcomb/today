import styled from 'styled-components';
import DetailedTask from '../../components/tasks/tasksList/detailedTask/DetailedTask';
import DetailedTaskButtons from '../../components/tasks/tasksList/detailedTask/DetailedTaskButtons';
import CompletedDetailedTask from '../../components/tasks/tasksList/detailedTask/CompletedDetailedTask';
import {
  SeparatedList,
  SeparatedListItem,
} from '../../components/layout/Lists';
import Accordion from '../../components/layout/Accordion';
import { Button } from '../../components/layout/Buttons';
import { useState } from 'react';
import Modal from '../../components/layout/Modal';

const exampleTask = {
  score: 1,
  _id: 'fakeId',
  name: 'Get phone repaired',
  urgency: 1,
  resistance: 1,
  time: 50,
  complete: false,
};

const DisplayContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.midGrey};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  height: 600px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: start;
  align-items: center;
`;

export default function newlists() {
  const [showModal, setShowModal] = useState(false);

  function handleAddTask(e) {
    console.log('Opening modal to add task');
    setShowModal(true);
  }

  function handleModalAction() {
    console.log('Modal action!');
  }

  return (
    <DisplayContainer>
      <SeparatedList>
        <HeaderContainer>
          <h1>Today's Tasks</h1>
          <Button buttonstyle='primary' large onClick={handleAddTask}>
            Add New Task
          </Button>
        </HeaderContainer>
        <SeparatedListItem>
          <DetailedTask task={exampleTask}></DetailedTask>
        </SeparatedListItem>

        <Accordion title={<DetailedTask task={exampleTask}></DetailedTask>}>
          <DetailedTaskButtons task={exampleTask}></DetailedTaskButtons>
        </Accordion>
        <SeparatedListItem>
          <CompletedDetailedTask task={exampleTask}></CompletedDetailedTask>
        </SeparatedListItem>
      </SeparatedList>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <Button onClick={handleModalAction}>Click me!</Button>
        </Modal>
      ) : (
        ''
      )}
    </DisplayContainer>
  );
}
