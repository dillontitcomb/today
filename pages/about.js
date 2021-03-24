import { Button } from '../components/layout/Buttons';
import { fetcher } from '../utils/helperFunctions';

const fakeProfileData = {
  firstName: 'Testing relative',
  lastName: 'Paths',
  habits: [],
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

  return (
    <div>
      <h1>Here is the About Page!</h1>
      <Button buttonstyle='primary' onClick={handleAddProfile}>
        Add Profile
      </Button>
    </div>
  );
}
