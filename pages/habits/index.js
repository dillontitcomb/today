import { useEffect, useState } from 'react';
import HabitsList from '../../components/habits/HabitsList';
import SimpleAddHabit from '../../components/habits/SimpleAddHabit';
import { Button } from '../../components/layout/Buttons';
import Modal from '../../components/layout/Modal';
import { Container, SplitPane, Pane } from '../../components/layout/Wrappers';
import useGlobalContext from '../../hooks/useGlobalContext';

export default function habits() {
  // TODO: Create UseModal hook!
  const [showModal, setShowModal] = useState(false);
  const { habits, getHabits } = useGlobalContext();

  useEffect(() => {
    getHabits();
  }, []);

  const openModal = () => {
    console.log('Trying to display modal.');
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <h1>Habits Dashboard</h1>
      <Container center>
        <Button onClick={openModal}>Show Modal</Button>
        {showModal && (
          <Modal showModal={showModal} setShowModal={setShowModal}>
            Here's the modal content
          </Modal>
        )}
      </Container>
      <SplitPane>
        <Pane>
          <HabitsList habits={habits}></HabitsList>
        </Pane>
        <Pane>
          <SimpleAddHabit />
        </Pane>
      </SplitPane>
    </div>
  );
}
