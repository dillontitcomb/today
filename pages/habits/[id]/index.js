import { useRouter } from 'next/router';
import useHabit from '../../../hooks/useHabit';

export default function habitPage(params) {
  const router = useRouter();
  const { id } = router.query;
  const { habit, habitLoading, habitError } = useHabit(id);

  return (
    <div>
      <h1>This is the single habit page</h1>
      <h3>Habit: {habit?.name}</h3>
    </div>
  );
}
