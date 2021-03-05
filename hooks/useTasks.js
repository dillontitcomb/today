import useSWR from 'swr';

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

export default function useTask() {
  const { data, error } = useSWR('/api/tasks', fetcher);

  return { tasks: data, isLoading: !error && !data, isError: error };
}
