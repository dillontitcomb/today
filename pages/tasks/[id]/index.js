import { useRouter } from 'next/router';
import SimpleEditTask from '../../../components/tasks/SimpleEditTask';
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
      <SimpleEditTask task={task}></SimpleEditTask>
    </div>
  );
}
