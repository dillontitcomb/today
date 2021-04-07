import { useSession } from 'next-auth/client';
import AddTask from '../components/AddTask';
import EditTask from '../components/EditTask';
import useTask from '../hooks/useTask';
import useTasks from '../hooks/useTasks';

const exampleTaskId = '6041606d2c3b7e4374c61ea7';

export default function apitesting() {
  const [session, loading] = useSession();
  const { tasks, tasksLoading, tasksError } = useTasks();
  const { task, taskLoading, taskError } = useTask(exampleTaskId);

  return (
    <div>
      <h1>Let's test out our apis!</h1>
      <h2>{session && <p>You're logged in!</p>}</h2>
      <div>
        <h3>Get all tasks:</h3>
        {tasks && tasks.map((task) => <span key={task._id}>{task.name}</span>)}
      </div>
      <div>
        <h3>Get a task - should be "Power Lift"</h3>
        <p>{task?.name}</p>
      </div>
      <h1>Add a Task</h1>
      <AddTask></AddTask>
      <h2>Edit a Task</h2>
      <EditTask></EditTask>
    </div>
  );
}
