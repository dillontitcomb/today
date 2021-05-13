import { List } from '../../layout/Lists';
import Accordion from '../../layout/Accordion';
import TaskTitle from './TaskTitle';
import TaskDetails from './TaskDetails';

export default function TasksList({ tasks }) {
  return (
    <List>
      {tasks &&
        tasks.map((task) => {
          return (
            <Accordion title={<TaskTitle task={task} />} key={task._id}>
              <TaskDetails task={task}></TaskDetails>
            </Accordion>
          );
        })}
    </List>
  );
}
