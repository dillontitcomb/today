import { useSession } from 'next-auth/client';
import { mutate } from 'swr';
import useTasks from '../hooks/useTasks';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const fakeUserData = {
  name: 'moneyball',
  time: 35,
  resistance: 5,
  urgency: 5,
  recurring: true,
  status: 'ongoing',
};

export default function Tasks() {
  const [session, loading] = useSession();
  console.log('HERE IS THE SESSION');
  const { tasks, error } = useTasks();
  console.log('HERE ARE THE TASKS:', tasks);
  if (error) console.log(error);

  async function submitFakeForm() {
    console.log('Attempting the fake form!');
    await fetcher('http://localhost:3000/api/tasks', {
      method: 'POST',
      body: JSON.stringify(fakeUserData),
    });
    mutate('/api/tasks');
  }

  if (loading) return 'Loading...';
  if (!loading && !session) return <p>Access Denied</p>;

  return (
    <div>
      <h1>This is your tasks dashboard!</h1>
      <p>Welcome, {session.user.email}</p>
      <h1>Here are your tasks!</h1>
      {tasks && tasks.map((task, key) => <p key={key}>{task.name}</p>)}
      <h1>Quickform!</h1>
      <button onClick={submitFakeForm}>Fake form submit</button>
    </div>
  );
}
