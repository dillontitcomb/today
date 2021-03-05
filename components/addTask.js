import { useSession } from 'next-auth/client';
import Form from './Form';

const AddTask = () => {
  const [session, loading] = useSession();

  const taskForm = {
    name: '',
    time: '',
    resistance: '',
    urgency: '',
    recurring: false,
    status: 'incomplete',
    user: session && session.userId,
  };

  return <Form formId='add-task-form' taskForm={taskForm} UpdateTask='true' />;
};

export default AddTask;
