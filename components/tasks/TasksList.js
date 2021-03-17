import { ListItem } from '../layout/Lists';

export default function TasksList({ tasks }) {
  return (
    <>
      {tasks &&
        tasks.map((task) => <ListItem key={task._id}>{task.name}</ListItem>)}
    </>
  );
}
