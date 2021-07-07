import { SeparatedList } from '../../layout/Lists';
import DetailedTask from './detailedTask/DetailedTask';
import DetailedTaskButtons from './detailedTask/DetailedTaskButtons';
import Accordion from '../../layout/Accordion';

export default function TasksList({ tasks }) {
  console.log(tasks);
  return (
    <SeparatedList>
      {tasks.length > 0 &&
        tasks.map((task) => {
          return (
            <Accordion
              key={task._id}
              title={<DetailedTask task={task}></DetailedTask>}
            >
              <DetailedTaskButtons task={task}></DetailedTaskButtons>
            </Accordion>
          );
        })}
    </SeparatedList>
  );
}
