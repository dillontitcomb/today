import { server } from '../../config';
import { fetcher } from '../../utils/helperFunctions';
import GlobalContext from './GlobalContext';
import globalReducer from './globalReducer';
import { useReducer } from 'react';
import {
  GET_TASKS_FAILURE,
  GET_TASKS_SUCCESS,
  GET_TASK_FAILURE,
  GET_TASK_SUCCESS,
  GET_HABITS_FAILURE,
  GET_HABITS_SUCCESS,
  GET_TODAY_SUCCESS,
  GET_TODAY_FAILURE,
  UPDATE_TASK_FAILURE,
  UPDATE_TASK_SUCCESS,
  MARK_TASK_COMPLETE_FAILURE,
  MARK_TASK_COMPLETE_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  ASSIGN_TASK_TO_DAY_FAILURE,
  ASSIGN_TASK_TO_DAY_SUCCESS,
} from '../types';

const GlobalState = (props) => {
  const initialState = {
    tasks: [],
    task: {},
    habits: [],
    habit: {},
    day: {},
    loading: false,
    errors: {},
    error: {},
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  // TODO: Add pre-render functions that run before the actual API calls that update local state to make the UI update instantly

  //        //
  //        //
  // TASKS  //
  //        //
  //        //

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
      console.log('CONTEXT: ADD TASK');
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
      // console.log('CONTEXT: UPDATE TASK BY ID,');
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
      // console.log('TASK CONTEXT: MARK TASK COMPLETE');
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
      // console.log('CONTEXT: DELETE TASK');
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

  //        //
  //        //
  // HABITS //
  //        //
  //        //

  const getHabits = async () => {
    try {
      // console.log('CONTEXT: GET HABITS');
      const res = await fetcher(`${server}/api/habits`);
      const habits = res.data;
      dispatch({ type: GET_HABITS_SUCCESS, payload: habits });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_HABITS_FAILURE, payload: err });
    }
  };

  //        //
  //        //
  // TODAY  //
  //        //
  //        //

  const getToday = async () => {
    try {
      // console.log('CONTEXT: GET TODAYS TASKS');
      const res = await fetcher(`${server}/api/today`);
      const today = res.data;
      dispatch({ type: GET_TODAY_SUCCESS, payload: today });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_TODAY_FAILURE, payload: err });
    }
  };

  // Assign a task to today
  const assignTaskToDay = async (taskId, day) => {
    console.log('TASKID: ', taskId);
    console.log('DAY OBJECT', day);
    try {
      // 1. Update task's dateAssigned and day properties
      const taskRes = await fetcher(`${server}/api/tasks/${taskId}`, {
        method: 'PUT',
        body: JSON.stringify({ dateAssigned: Date.now(), day: day._id }),
      });
      const updatedTask = taskRes.data;
      // 2. Get updated tasks list to update global state
      const tasksRes = await fetcher(`${server}/api/tasks/`);
      const updatedTasks = tasksRes.data;
      // 3. Update day's tasks array with new task
      const dayRes = await fetcher(`${server}/api/days/${day._id}`, {
        method: 'PUT',
        body: JSON.stringify({ $push: { tasks: [updatedTask._id] } }),
      });
      const updatedDay = dayRes.data;
      const payload = {
        task: updatedTask,
        tasks: updatedTasks,
        day: updatedDay,
      };
      // 4. dispatch action updating today and updating tasks list
      dispatch({ type: ASSIGN_TASK_TO_DAY_SUCCESS, payload: payload });
    } catch (error) {
      console.log(error);
      dispatch({ type: ASSIGN_TASK_TO_DAY_FAILURE, payload: error });
    }
  };

  //TODO: unassign task from day
  const unassignTask = async (taskId) => {
    // 1. Update task: remove dateAssigned, remove day field
    // 2. Get updated task list
    // 3. Update day: remove task from tasks list
    // 4. Dispatch action to update task, tasks, and day state objects
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        habits: state.habits,
        habit: state.habit,
        day: state.day,
        loading: state.loading,
        errors: state.errors,
        error: state.error,
        getTasks,
        getTask,
        addTask,
        updateTask,
        markTaskComplete,
        deleteTask,
        getHabits,
        getToday,
        assignTaskToDay,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
