import styled from 'styled-components';
import DetailedTask from '../../components/tasks/tasksList/detailedTask/DetailedTask';
import DetailedTaskButtons from '../../components/tasks/tasksList/detailedTask/DetailedTaskButtons';
import CompletedDetailedTask from '../../components/tasks/tasksList/detailedTask/CompletedDetailedTask';
import {
  SeparatedList,
  SeparatedListItem,
} from '../../components/layout/Lists';
import Accordion from '../../components/layout/Accordion';

const exampleTask = {
  score: 1,
  _id: 'fakeId',
  name: 'Get phone repaired',
  urgency: 3,
  resistance: 0,
  time: 15,
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

export default function newlists(params) {
  return (
    <DisplayContainer>
      <SeparatedList>
        <h1>Today's Tasks</h1>
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
    </DisplayContainer>
  );
}
