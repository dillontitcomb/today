import styled from 'styled-components';
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

//TODO: Add functionality to buttons once context is added

export default function TaskDetailsActions({ task }) {
  return (
    <ButtonContainer>
      <SuccessButton small fill>
        Complete
      </SuccessButton>
      <Button small fill>
        Edit
      </Button>
      <DeleteButton small fill>
        Delete
      </DeleteButton>
    </ButtonContainer>
  );
}
