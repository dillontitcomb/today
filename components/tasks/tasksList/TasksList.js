import { List } from '../../layout/Lists';
import Accordion from '../../layout/Accordion';
import TaskTitle from './TaskTitle';
import TaskDetails from './TaskDetails';

export default function TasksList({ tasks }) {
  console.log(tasks);
  return (
    <List>
      {tasks.length > 0 &&
        tasks.map((task) => {
          return (
            <Accordion
              hasChevron
              title={<TaskTitle task={task} />}
              key={task._id}
            >
              <TaskDetails task={task}></TaskDetails>
            </Accordion>
          );
        })}
    </List>
  );
}
