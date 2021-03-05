import { useSession } from 'next-auth/client';
import useTasks from '../hooks/useTasks';

const fakeUserData = {
  name: 'Hammer some nails',
  time: 35,
  resistance: 5,
  urgency: 5,
  recurring: true,
  status: 'ongoing',
};

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

export default function Tasks() {
  const [session, loading] = useSession();
  const { tasks, isLoading, isError } = useTasks();

  function submitFakeForm() {
    console.log('Attempting the fake form!');
    fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      body: JSON.stringify(fakeUserData),
    });
  }

  if (isError) return <p>Failed to load</p>;
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
