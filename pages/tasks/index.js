import { useSession } from 'next-auth/client';
import Link from 'next/link';
import { useState } from 'react';
import AddTask from '../../components/addTask';
import DeleteTask from '../../components/DeleteTask';
import EditTask from '../../components/EditTask';
import useTasks from '../../hooks/useTasks';

export default function tasks() {
  const [taskToEdit, setTaskToEdit] = useState({});
  const [session, loading] = useSession();
  const { tasks, error } = useTasks();
  if (error) console.log(error);

  if (loading) return 'Loading...';
  if (!loading && !session) return <p>Access Denied</p>;

  function handleSelectTask(e) {
    e.preventDefault();
    const id = e.target.getAttribute('taskid');
    const task = tasks.find((task) => task._id == id);
    setTaskToEdit(task);
    console.log(taskToEdit);
  }

  return (
    <div>
      <div>
        <h1>This is your tasks dashboard!</h1>
        <p>Welcome, {session.user.email}</p>
        <h1>Here are your tasks!</h1>
        {tasks &&
          tasks.map((task, key) => {
            return (
              <div key={key}>
                <span onClick={handleSelectTask} taskid={task._id}>
                  {task.name}
                </span>
                <Link href='/tasks/[id]' as={`/tasks/${task._id}`}>
                  <button type='button'>More</button>
                </Link>
              </div>
            );
          })}
      </div>
      <div>
        <AddTask></AddTask>
        {!loading && <EditTask task={taskToEdit}></EditTask>}
        <DeleteTask></DeleteTask>
      </div>
    </div>
  );
}
