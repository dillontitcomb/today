import { server } from '../../config';
import { fetcher } from '../../utils/helperFunctions';
import TasksContext from './tasksContext';
import TasksReducer from './tasksReducer';
import { useReducer } from 'react';
import {
  GET_TASKS_FAILURE,
  GET_TASKS_SUCCESS,
  GET_TASK_FAILURE,
  GET_TASK_SUCCESS,
  MARK_TASK_COMPLETE_FAILURE,
  MARK_TASK_COMPLETE_SUCCESS,
} from '../types';

const TasksState = (props) => {
  const initialState = {
    tasks: [],
    task: {},
    loading: false,
    errors: {},
    error: {},
  };

  const [state, dispatch] = useReducer(TasksReducer, initialState);

  // TODO: Replace existing API calls with context calls
  //
  // Mark Task Complete
  // Delete Task
  // Edit/Update Task
  // Add Task to Today
  // Remove Task from Today

  // Get all tasks
  const getTasks = async () => {
    try {
      console.log('Trying to fetch all tasks');
      const res = await fetcher(`${server}/api/tasks`);
      const tasks = res.data;
      dispatch({ type: GET_TASKS_SUCCESS, payload: tasks });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_TASKS_FAILURE, payload: err });
    }
  };

  // Get single task by id
  const getTask = async (id) => {
    try {
      const res = await fetcher(`${server}/api/tasks/${id}`);
      const task = res.data;
      console.log(task);
      dispatch({ type: GET_TASK_SUCCESS, payload: task });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_TASK_FAILURE, payload: err });
    }
  };

  // Update single task
  const updateTask = async (task) => {
    try {
      console.log('Trying to update task');
      // Update task
      const res = await fetcher(`${server}/api/tasks/${task._id}`, {
        method: 'PUT',
        body: JSON.stringify(task),
      });
      const updatedTask = res.data;
      // Get all tasks now single task has been updated
      const tasksRes = await fetcher(`${server}/api/tasks`);
      const updatedTasks = tasksRes.data;
      // return updated task list
      const payload = { task: updatedTask, tasks: updatedTasks };
      dispatch({ type: UPDATE_TASK_SUCCESS, payload: payload });
    } catch (err) {
      console.log(err);
      dispatch({ type: UPDATE_TASK_FAILURE, payload: err });
    }
  };

  // Mark task complete
  const markTaskComplete = async (task) => {
    try {
      console.log('Trying to mark task complete');
      // Update task
      const res = await fetcher(`${server}/api/tasks/${task._id}`, {
        method: 'PUT',
        body: JSON.stringify({ complete: true, dateComplete: Date.now() }),
      });
      const updatedTask = res.data;
      // Get all tasks now single task has been updated
      const tasksRes = await fetcher(`${server}/api/tasks`);
      const tasks = tasksRes.data;
      // return updated task list
      dispatch({ type: MARK_TASK_COMPLETE_SUCCESS, payload: tasks });
    } catch (err) {
      console.log(err);
      dispatch({ type: MARK_TASK_COMPLETE_FAILURE, payload: err });
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        loading: state.loading,
        errors: state.errors,
        error: state.error,
        getTasks,
        updateTask,
        getTask,
        markTaskComplete,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksState;
