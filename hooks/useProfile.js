import useSWR from 'swr';
import { fetcher } from '../utils/helperFunctions';

export default function useProfile() {
  const { data, error } = useSWR(`/api/profile`, fetcher);

  return {
    profile: data?.data,
    profileLoading: !error && !data,
    profileError: error,
  };
}
