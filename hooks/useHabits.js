import useSWR from 'swr';
import { fetcher } from '../utils/helperFunctions';

export default function useHabits() {
  const { data, error } = useSWR('/api/habits', fetcher);

  return {
    habits: data?.data,
    habitsLoading: !error && !data,
    habitsError: error,
  };
}
