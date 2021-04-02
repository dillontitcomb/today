import useSWR from 'swr';
import { fetcher } from '../utils/helperFunctions';

export default function useHabits(id) {
  const { data, error } = useSWR(`/api/habits/${id}`, fetcher);

  return {
    habit: data?.data,
    habitLoading: !error && !data,
    habitError: error,
  };
}
