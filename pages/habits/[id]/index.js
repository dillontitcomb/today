import { useRouter } from 'next/router';
import { SplitPane } from '../../../components/layout/Wrappers';
import SimpleAddTask from '../../../components/tasks/SimpleAddTask';
import { Button } from '../../../components/layout/Buttons';
import styled from 'styled-components';
import { fetcher } from '../../../utils/helperFunctions';
import useGlobalContext from '../../../hooks/useGlobalContext';
import { useEffect } from 'react';

// TODO:
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

export default function habitPage() {
  const router = useRouter();
  const { id } = router.query;

  const { habit, getHabit, deleteHabit } = useGlobalContext();

  useEffect(() => {
    getHabit(id);
  }, [router]);

  async function handleDeleteHabitTask(e) {
    e.preventDefault();
    console.log('Trying to remove task from habit');
    await fetcher(`/api/tasks/${e.target.value}`, {
      method: 'DELETE',
      body: {},
    });
  }

  // TODO: Fix bug: network error when deleting single habit
  async function handleDeleteHabit(e) {
    e.preventDefault();
    console.log('Trying to delete habit!');
    deleteHabit(id);
    router.push('/habits');
  }

  // TODO: Better job of handling loading
  if (!habit) return <p>Loading...</p>;

  return (
    <div>
      <h1>This is the single habit page</h1>
      <SplitPane>
        <div>
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
          </div>
          <h3>Tasks to complete this habit</h3>
          {habit.tasks
            ? habit.tasks.map((task) => (
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
              ))
            : 'null'}
        </div>

        <SimpleAddTask habitId={id} inactive updateHabit></SimpleAddTask>
      </SplitPane>
    </div>
  );
}
