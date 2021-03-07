import useSWR from 'swr';
import { fetcher } from '../utils/helperFunctions';

export default function useTask(id) {
  const { data, error } = useSWR(`/api/tasks/${id}`, fetcher);

  return {
    task: data?.data,
    taskLoading: !error && !data,
    taskError: error,
  };
}
