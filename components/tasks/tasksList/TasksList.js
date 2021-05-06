import { List } from '../../layout/Lists';

import TaskListItem from './TaskListItem';

export default function TasksList({ tasks }) {
  return (
    <List>
      {tasks &&
        tasks.map((task) => {
          return <TaskListItem task={task} key={task._id}></TaskListItem>;
        })}
    </List>
  );
}
