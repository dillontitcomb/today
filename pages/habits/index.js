import { useState } from 'react';
import AddHabit from '../../components/habits/AddHabit';
import { Button } from '../../components/layout/Buttons';
import Modal from '../../components/layout/Modal';
import { Container } from '../../components/layout/Wrappers';

export default function habits() {
  // TODO: Create UseModal hook!
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log('Trying to display modal.');
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <h1>Habits Page</h1>
      <AddHabit></AddHabit>
      <Container center>
        <Button onClick={openModal}>Show Modal</Button>
        {showModal && (
          <Modal showModal={showModal} setShowModal={setShowModal}>
            Here's the modal content
          </Modal>
        )}
      </Container>
    </div>
  );
}
