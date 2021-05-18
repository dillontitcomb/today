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
} from '../types';

const GlobalState = (props) => {
  const initialState = {
    tasks: [],
    task: {},
    habits: [],
    habit: {},
    today: {},
    loading: false,
    errors: {},
    error: {},
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

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
      console.log('CONTEXT: DELETE TASK');
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
      console.log('CONTEXT: GET HABITS');
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
      console.log('CONTEXT: GET TODAYS TASKS');
      const res = await fetcher(`${server}/api/today`);
      const today = res.data;
      dispatch({ type: GET_TODAY_SUCCESS, payload: today });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_TODAY_FAILURE, payload: err });
    }
  };

  // INCOMPLETE. TODO: Add PUT and POST endpoints to /api/days to allow for updating today's tasks
  const moveTaskToToday = async (task, today) => {
    // 1. Uupdate task's dateAssigned and day properties
    const res = await fetcher(`${server}/api/tasks/${task._id}`, {
      method: 'PUT',
      body: JSON.stringify({ dateAssigned: Date.now(), day: today._id }),
    });
    const updatedTask = res.data;
    // 2. Add updated task to Today's tasks array
    const todayRes = await fetcher(`${server}/api/days/${today._id}`, {
      method: 'POST',
      body: JSON.stringify({ $push: { tasks: [updatedTask._id] } }),
    });
    const newDay = todayRes.data;
    // 3. dispatch action updating today and updating tasks list
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        habits: state.habits,
        habit: state.habit,
        today: state.today,
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
        moveTaskToToday
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
