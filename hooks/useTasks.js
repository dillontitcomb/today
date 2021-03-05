import useSWR from 'swr';
import { fetcher } from '../utils/helperFunctions';

export default function useTasks() {
  const { data, error } = useSWR('/api/tasks', fetcher);

  return {
    tasks: data?.data,
    tasksLoading: !error && !data,
    tasksError: error,
  };
}
