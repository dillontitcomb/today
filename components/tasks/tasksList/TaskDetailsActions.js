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

export default function TaskDetailsActions({ task }) {
  return (
    <ButtonContainer>
      <Button small fill>
        Edit
      </Button>
      <DeleteButton small fill>
        Delete
      </DeleteButton>
    </ButtonContainer>
  );
}
