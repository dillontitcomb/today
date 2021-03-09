import { useRouter } from 'next/router';
import EditTask from '../../../components/EditTask';
import useTask from '../../../hooks/useTask';

export default function taskPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { task, loading, error } = useTask(id);

  if (!task) return <p>Loading...</p>;
  if (error) return <p>Failed to load.</p>;

  return (
    <div>
      <p>Hi this is where the task goes!</p>
      <p>{task?.name}</p>
      <EditTask task={task}></EditTask>
    </div>
  );
}
