import { Button } from '../components/layout/Buttons';
import { fetcher } from '../utils/helperFunctions';

const fakeProfileData = {
  firstName: 'Testing relative',
  lastName: 'Paths',
  habits: [],
};

const fakeTaskData = {
  name: 'Do 30 pull ups',
  time: 20,
  resistance: 3,
  urgency: 1,
  complete: false,
  active: true,
  habit: '6052910cf53d0413307cf541',
  day: null,
  user: '6040f4c6a43d7848a4c18ad6',
};

export default function about() {
  async function handleAddProfile() {
    console.log('trying to add profile');
    const data = await fetcher('/api/profile', {
      method: 'POST',
      body: JSON.stringify(fakeProfileData),
    });
    console.log(data);
  }
  async function handleAddTask() {
    console.log('trying to add task');
    const data = await fetcher('/api/tasks', {
      method: 'POST',
      body: JSON.stringify(fakeTaskData),
    });
    console.log(data);
  }

  return (
    <div>
      <h1>Here is the About Page!</h1>
      <Button buttonstyle='primary' onClick={handleAddProfile}>
        Add Profile
      </Button>
      <Button buttonstyle='secondary' onClick={handleAddTask}>
        Add Task
      </Button>
    </div>
  );
}
