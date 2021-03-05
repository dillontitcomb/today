import useSWR from 'swr';
import { fetcher } from '../utils/helperFunctions';

export default function useTask(id) {
  console.log('Trying to fetch a single task');
  const { data, error } = useSWR(`api/tasks/${id}`, fetcher);

  console.log(data);

  return {
    task: data?.data,
    taskLoading: !error && !data,
    taskError: error,
  };
}
