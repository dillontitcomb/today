import styled from 'styled-components';
import { Button, DeleteButton } from '../../../layout/Buttons';

const ButtonContainer = styled.div`
  padding: 0.5rem 0 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
`;

export default function DetailedTaskButtons({ task }) {
  function handleButtonClick(e) {
    console.log(`Trying to edit/delete ${task.name}`);
    // Stop propagation is necessary to prevent the accordion from closing when the button is clicked.
    e.stopPropagation();
  }

  return (
    <ButtonContainer>
      <Button onClick={handleButtonClick}>Edit Task</Button>
      <DeleteButton buttonstyle='secondary' onClick={handleButtonClick}>
        Delete Task
      </DeleteButton>
    </ButtonContainer>
  );
}
