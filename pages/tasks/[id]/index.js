import { useRouter } from 'next/router';
import SimpleEditTask from '../../../components/tasks/SimpleEditTask';
import useTasksContext from '../../../hooks/useTasksContext';
import { useEffect } from 'react';

export default function taskPage() {
  const router = useRouter();
  const { id } = router.query;

  const { task, getTask } = useTasksContext();

  // When router query object becomes available, get Task
  useEffect(() => {
    getTask(id);
  }, [router]);

  return <div>{task && <SimpleEditTask task={task}></SimpleEditTask>}</div>;
}
