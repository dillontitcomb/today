import { useFormik } from 'formik';
import { fetcher } from '../utils/helperFunctions';

export default function AddTask() {
  const formik = useFormik({
    initialValues: {
      name: '',
      time: 30,
      resistance: 1,
      urgency: 1,
      recurring: false,
      status: 'incomplete',
    },
    onSubmit: async (values) => {
      console.log('trying to submit from addtask form');
      console.log(values);
      const newTask = await fetcher('http://localhost:3000/api/tasks', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      let task = newTask.data;
      console.log(`New task, ${task.name} added`);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <button type='submit'>Submit Form</button>
      </form>
    </div>
  );
}
