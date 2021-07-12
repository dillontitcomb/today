import { SeparatedList, SeparatedListItemSkeleton } from '../../layout/Lists';
import CompletedDetailedTask from './detailedTask/CompletedDetailedTask';

// TODO: Add button to clear completed tasks list.
export default function CompletedTasksList({ tasks }) {
  return (
    <>
      <SeparatedList>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <CompletedDetailedTask
                key={task._id}
                task={task}
              ></CompletedDetailedTask>
            );
          })
        ) : (
          <SeparatedListItemSkeleton>
            No tasks completed... yet!
          </SeparatedListItemSkeleton>
        )}
      </SeparatedList>
    </>
  );
}
