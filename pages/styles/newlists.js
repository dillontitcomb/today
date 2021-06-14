import styled from 'styled-components';
import TaskScore from '../../components/tasks/tasksList/TaskScore';

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

const Title = styled.span`
  font-size: 3em;
  font-weight: 500;
  text-align: left;
  color: #002346;
`;

// TODO: Media queries
const SeparatedList = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  grid-gap: 0.5rem;
  padding: 1rem;
`;

const SeparatedListItem = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 0.8rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const ItemText = styled.span`
  font-size: 1em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.midText};
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 0.5rem;
`;

const ItemWarning = styled.div`
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.danger};
`;

const ItemSuccess = styled(ItemWarning)`
  color: ${({ theme }) => theme.colors.success};
`;

const ItemInfo = styled(ItemWarning)`
  color: ${({ theme }) => theme.colors.midText};
`;

const Checkbox = styled.input`
  margin-left: auto;
`;

export default function newlists(params) {
  return (
    <DisplayContainer>
      <SeparatedList>
        <Title>Today's Tasks</Title>
        <SeparatedListItem>
          <ItemContent>
            <TaskScore score={2}></TaskScore>
            <ItemText>Go to the gym</ItemText>
            <ItemInfo>45mins</ItemInfo>
            <ItemSuccess>Quick</ItemSuccess>
            <ItemWarning>Urgent</ItemWarning>
            <Checkbox type='checkbox' />
          </ItemContent>
        </SeparatedListItem>
        <SeparatedListItem>
          <ItemContent>
            <TaskScore score={6}></TaskScore>
            <ItemText>Schedule doctor's appointment</ItemText>
            <ItemInfo>5mins</ItemInfo>
            <ItemSuccess>Quick</ItemSuccess>
            <ItemWarning>Stressful</ItemWarning>
            <Checkbox type='checkbox' />
          </ItemContent>
        </SeparatedListItem>
        <SeparatedListItem>
          <ItemContent>
            <TaskScore score={1}></TaskScore>
            <ItemText>Take out the trash</ItemText>
            <ItemInfo>2mins</ItemInfo>
            <ItemSuccess>Quick</ItemSuccess>
            <ItemSuccess>Easy</ItemSuccess>
            <Checkbox type='checkbox' />
          </ItemContent>
        </SeparatedListItem>
        <SeparatedListItem>Here is a task item</SeparatedListItem>
        <SeparatedListItem>Here is a task item</SeparatedListItem>
      </SeparatedList>
    </DisplayContainer>
  );
}
