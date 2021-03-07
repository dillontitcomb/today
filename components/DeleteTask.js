import { useFormik } from 'formik';
import { useSession } from 'next-auth/client';
import useTasks from '../hooks/useTasks';
import { fetcher } from '../utils/helperFunctions';

export default function DeleteTask() {
  const [session, loading] = useSession();
  const { tasks, error } = useTasks();

  if (error) console.log(error);
  if (loading) return 'Loading...';
  if (!loading && !session) return <p>Access Denied</p>;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      tasks: tasks ? tasks : [],
      selectedTaskId: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      const deletedTask = await fetcher(
        `http://localhost:3000/api/tasks/${values.selectedTaskId}`,
        {
          method: 'DELETE',
        }
      );
    },
  });

  function onSelectOption(e) {
    e.preventDefault();
    const taskId = e.target.value;
    formik.setFieldValue('selectedTaskId', taskId);
    console.log(formik.values);
  }

  return (
    <div>
      <h1>Delete Task</h1>
      <form onSubmit={formik.handleSubmit}>
        <select
          name='selectedTaskId'
          id='selectedTaskId'
          onChange={onSelectOption}
        >
          {formik.values.tasks.map((value, key) => {
            return (
              <option key={key} value={value._id}>
                {value.name}
              </option>
            );
          })}
        </select>
        <button type='submit'>Delete</button>
      </form>
    </div>
  );
}
