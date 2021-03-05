import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useTasks() {
  const { data, error } = useSWR('/api/tasks', fetcher);

  return {
    tasks: data?.data,
    isLoading: !error && !data,
    error: error,
  };
}
