import styled from 'styled-components';

const AddTaskContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  border-radius: 25px;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  overflow: hidden;
  box-shadow: 8px 10px 16px rgba(0, 0, 0, 0.1);
`;

const IconGroup = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: stretch;
  span {
    place-self: center;
  }
`;

const Title = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightText};
`;

export default function SimpleAddTask() {
  return (
    <AddTaskContainer>
      <Title>
        <h1>Do 15 Burpees</h1>
      </Title>
      <h3>Details</h3>
      <IconGroup>
        <span>Time</span>
        <span>Urgency</span>
        <span>Complete</span>
      </IconGroup>
    </AddTaskContainer>
  );
}
