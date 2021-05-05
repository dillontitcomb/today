import { useRouter } from 'next/router';
import useHabit from '../../../hooks/useHabit';
import { SplitPane } from '../../../components/layout/Wrappers';
import SimpleAddTask from '../../../components/tasks/SimpleAddTask';
import { Button } from '../../../components/layout/Buttons';
import styled from 'styled-components';
import { fetcher } from '../../../utils/helperFunctions';
import { mutate } from 'swr';

// TODO:
// Add ability to add task to habit DONE
// Change GET Habit API to popualate tasks DONE
// Show tasks on single habit page DONE
// Add deleteHabit functionality
// Remove task from habit
// List habit properties
// SimpleEditHabit Form

const HabitNameContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0;
  gap: 1rem;
  span {
    font-weight: bold;
  }
`;

const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export default function habitPage(params) {
  const router = useRouter();
  const { id } = router.query;
  const { habit, habitLoading, habitError } = useHabit(id);

  if (!habit) return <p>Loading...</p>;
  if (habitError) return <p>Failed to load.</p>;

  async function handleDeleteHabitTask(e) {
    e.preventDefault();
    console.log('Trying to remove task from habit');
    await fetcher(`/api/tasks/${e.target.value}`, {
      method: 'DELETE',
      body: {},
    });
  }

  async function handleDeleteHabit(e) {
    e.preventDefault();
    console.log('Trying to delete habit!');
    await fetcher(`/api/habits/${id}`, {
      method: 'DELETE',
      body: {},
    });
    mutate('/api/habits');
    router.push('/habits');
  }

  return (
    <div>
      <h1>This is the single habit page</h1>
      <SplitPane>
        <div>
          <HabitNameContainer>
            <span>Habit: {habit.name}</span>{' '}
            <Button buttonstyle='secondary' onClick={handleDeleteHabit}>
              Delete Habit
            </Button>
          </HabitNameContainer>
          <p>
            Beginning {new Date(habit.startDate).toDateString()}, ending{' '}
            {new Date(habit.endDate).toDateString()}
          </p>
          <h3>Tasks to complete this habit</h3>
          {habit.tasks &&
            habit.tasks.map((task) => (
              <TaskContainer key={task._id}>
                <span>{task.name}</span>
                <Button
                  small
                  buttonstyle='secondary'
                  onClick={handleDeleteHabitTask}
                  value={task._id}
                >
                  Remove
                </Button>
              </TaskContainer>
            ))}
        </div>

        <SimpleAddTask habitId={id} inactive updateHabit></SimpleAddTask>
      </SplitPane>
    </div>
  );
}
