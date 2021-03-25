import useSWR from 'swr';
import { fetcher } from '../utils/helperFunctions';

export default function useToday() {
  const { data, error } = useSWR(`/api/today`, fetcher);

  return {
    today: data?.data,
    todayLoading: !error && !data,
    todayError: error,
  };
}
