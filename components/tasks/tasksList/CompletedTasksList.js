import Accordion from '../../layout/Accordion';
import { SeparatedList, SeparatedListItemSkeleton } from '../../layout/Lists';
import CompletedDetailedTask from './detailedTask/CompletedDetailedTask';
import DetailedTaskButtons from './detailedTask/DetailedTaskButtons';

// TODO: Add button to clear completed tasks list.
export default function CompletedTasksList({ tasks }) {
  return (
    <>
      <SeparatedList>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Accordion
                key={task._id}
                title={
                  <CompletedDetailedTask task={task}></CompletedDetailedTask>
                }
              >
                <DetailedTaskButtons task={task}></DetailedTaskButtons>
              </Accordion>
            );
          })
        ) : (
          <SeparatedListItemSkeleton>
            No completed tasks found
          </SeparatedListItemSkeleton>
        )}
      </SeparatedList>
    </>
  );
}
