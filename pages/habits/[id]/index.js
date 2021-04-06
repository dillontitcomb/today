import { useRouter } from 'next/router';
import useHabit from '../../../hooks/useHabit';
import { SplitPanel } from '../../../components/layout/Wrappers';
import SimpleAddTask from '../../../components/tasks/SimpleAddTask';

// TODO:
// Add ability to add task to habit DONE
// Change GET Habit API to popualate tasks
// Show tasks on single habit page
// Add deleteHabit functionality
// List habit properties
// SimpleEditHabit Form

export default function habitPage(params) {
  const router = useRouter();
  const { id } = router.query;
  const { habit, habitLoading, habitError } = useHabit(id);

  if (!habit) return <p>Loading...</p>;
  if (habitError) return <p>Failed to load.</p>;

  const leftPanel = (
    <div>
      <h3>Habit: {habit.name}</h3>
      <p>
        Beginning {new Date(habit.startDate).toDateString()}, ending{' '}
        {new Date(habit.endDate).toDateString()}
      </p>
      <h3>Tasks to complete this habit</h3>
      {habit.tasks &&
        habit.tasks.map((task, key) => <p key={task._id}>{task.name}</p>)}
    </div>
  );

  const rightPanel = (
    <SimpleAddTask habitId={id} inactive updateHabit></SimpleAddTask>
  );

  return (
    <div>
      <h1>This is the single habit page</h1>
      <SplitPanel left={leftPanel} right={rightPanel} />
    </div>
  );
}
