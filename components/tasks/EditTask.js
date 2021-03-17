import { useFormik } from 'formik';
import { fetcher } from '../../utils/helperFunctions';

export default function EditTask({ task }) {
  console.log(task);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: task.name ? task.name : '',
      time: task.time ? task.time : 0,
      resistance: task.resistance ? task.resistance : 0,
      urgency: task.urgency ? task.urgency : 0,
      recurring: task.recurring ? task.recurring : false,
      status: task.status ? task.status : '',
      _id: task._id ? task._id : '',
    },
    onSubmit: async (values) => {
      console.log('Trying to submit form to edit task!');
      const newTask = await fetcher(
        `http://localhost:3000/api/tasks/${values._id}`,
        {
          method: 'PUT',
          body: JSON.stringify(values),
        }
      );
      console.log(`New task, ${newTask.data.name} added`);
    },
  });

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor='time'>Time</label>
        <input
          type='number'
          name='time'
          id='time'
          onChange={formik.handleChange}
          value={formik.values.time}
        />
        <label htmlFor='resistance'>Resistance</label>
        <input
          type='number'
          name='resistance'
          id='resistance'
          onChange={formik.handleChange}
          value={formik.values.resistance}
        />
        <label htmlFor='urgency'>Urgency</label>
        <input
          type='number'
          name='urgency'
          id='urgency'
          onChange={formik.handleChange}
          value={formik.values.urgency}
        />
        <label htmlFor='recurring'>Recurring</label>
        <input
          type='checkbox'
          name='recurring'
          id='recurring'
          onChange={formik.handleChange}
          value={formik.values.recurring}
        />
        <label htmlFor='status'>Status</label>
        <input
          type='text'
          name='status'
          id='status'
          onChange={formik.handleChange}
          value={formik.values.status}
        />
        <button type='submit'>Submit Form</button>
      </form>
    </div>
  );
}
