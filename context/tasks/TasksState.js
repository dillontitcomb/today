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
  UPDATE_TASK_FAILURE,
  UPDATE_TASK_SUCCESS,
  MARK_TASK_COMPLETE_FAILURE,
  MARK_TASK_COMPLETE_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
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
      console.log('TASK CONTEXT: GET TASKS');
      const res = await fetcher(`${server}/api/tasks`);
      const tasks = res.data;
      console.log('Did we get tasks?', tasks);
      dispatch({ type: GET_TASKS_SUCCESS, payload: tasks });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_TASKS_FAILURE, payload: err });
    }
  };

  // Get single task by id
  const getTask = async (id) => {
    try {
      console.log('TASK CONTEXT: GET TASK');
      const res = await fetcher(`${server}/api/tasks/${id}`);
      const task = res.data;
      console.log(task);
      dispatch({ type: GET_TASK_SUCCESS, payload: task });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_TASK_FAILURE, payload: err });
    }
  };

  // Add Task
  const addTask = async (task, updateHabit = false) => {
    try {
      console.log('TASK CONTEXT: ADD TASK');
      const res = await fetcher(`${server}/api/tasks/`, {
        method: 'POST',
        body: JSON.stringify(task),
      });
      const updatedTask = res.data;

      // If updateHabit, this task was created for a specific habit.
      // Thus, that habit should be updated to have this task's id
      // TODO: Merge all contexts together!

      console.log('UpdateHabit?', updateHabit);

      if (updateHabit) {
        await fetcher(`/api/habits/${updatedTask.habit}`, {
          method: 'PUT',
          body: JSON.stringify({ $push: { tasks: [updatedTask._id] } }),
        });
      }

      // Then get updated tasks and update task context accordingly
      const tasksRes = await fetcher(`${server}/api/tasks`);
      const updatedTasks = tasksRes.data;
      const payload = { task: updatedTask, tasks: updatedTasks };
      dispatch({ type: UPDATE_TASK_SUCCESS, payload: payload });
    } catch (err) {
      console.log(err);
      dispatch({ type: UPDATE_TASK_FAILURE, payload: err });
    }
  };

  // Update single task
  const updateTask = async (task) => {
    try {
      console.log('TASK CONTEXT: UPDATE TASK BY ID,');
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
  const markTaskComplete = async (id) => {
    try {
      console.log('TASK CONTEXT: MARK TASK COMPLETE');
      // Update task
      const res = await fetcher(`${server}/api/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ complete: true, dateComplete: Date.now() }),
      });
      const updatedTask = res.data;
      // Get all tasks now single task has been updated
      const tasksRes = await fetcher(`${server}/api/tasks`);
      const updatedTasks = tasksRes.data;
      const payload = { task: updatedTask, tasks: updatedTasks };
      // return updated task list
      dispatch({ type: MARK_TASK_COMPLETE_SUCCESS, payload: payload });
    } catch (err) {
      console.log(err);
      dispatch({ type: MARK_TASK_COMPLETE_FAILURE, payload: err });
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    try {
      console.log('TASK CONTEXT: DELETE TASK');
      // Delete task, then get all tasks with this task deleted
      await fetcher(`${server}/api/tasks/${id}`, {
        method: 'DELETE',
      });
      const tasksRes = await fetcher(`${server}/api/tasks`);
      const tasks = tasksRes.data;
      dispatch({ type: DELETE_TASK_SUCCESS, payload: tasks });
    } catch (err) {
      console.log(err);
      dispatch({ type: DELETE_TASK_FAILURE, payload: err });
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
        deleteTask,
        addTask,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksState;
