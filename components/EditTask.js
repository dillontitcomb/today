import { mutate } from 'swr';
import useTask from '../hooks/useTask';
import { fetcher } from '../utils/helperFunctions';

const exampleTask = '604253a8cff62f1e208086c6';
const newTaskName = 'What about now?';

export default function EditTask() {
  const { task, loading, error } = useTask(exampleTask);
  if (!task) return <p>Loading...</p>;
  if (error) return <p>Failed to load.</p>;

  async function fakeEditTask(e) {
    e.preventDefault();
    await fetcher(`http://localhost:3000/api/tasks/${exampleTask}`, {
      method: 'PUT',
      body: JSON.stringify({ name: newTaskName }),
    });
    mutate('/api/tasks');
  }

  return (
    <div>
      <h3>Task to edit: {task.name}</h3>
      <button onClick={fakeEditTask}>Click to edit fake data</button>
    </div>
  );
}
