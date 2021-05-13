import useSWR from 'swr';
import { fetcher } from '../utils/helperFunctions';
import { server } from '../config/index';

export default function useTasks() {
  const { data, error } = useSWR(`${server}/api/tasks`, fetcher);

  return {
    tasks: data?.data,
    tasksLoading: !error && !data,
    tasksError: error,
  };
}
