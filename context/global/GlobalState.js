import { server } from '../../config';
import { fetcher } from '../../utils/helperFunctions';
import GlobalContext from './GlobalContext';
import globalReducer from './globalReducer';
import { useReducer } from 'react';
import {
  ADD_HABIT_SUCCESS,
  ADD_HABIT_FAILURE,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  GET_TASKS_FAILURE,
  GET_TASKS_SUCCESS,
  GET_TASK_FAILURE,
  GET_TASK_SUCCESS,
  GET_HABIT_FAILURE,
  GET_HABIT_SUCCESS,
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
  DELETE_HABIT_FAILURE,
  DELETE_HABIT_SUCCESS,
  ASSIGN_TASK_TO_DAY_FAILURE,
  ASSIGN_TASK_TO_DAY_SUCCESS,
  UNASSIGN_TASK_FAILURE,
  UNASSIGN_TASK_SUCCESS,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from '../types';

const GlobalState = (props) => {
  const initialState = {
    tasks: [],
    task: {},
    habits: [],
    habit: {},
    day: {},
    profile: {},
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
      dispatch({ type: ADD_TASK_SUCCESS, payload: payload });
    } catch (err) {
      console.log(err);
      dispatch({ type: ADD_TASK_FAILURE, payload: err });
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
  const getActiveHabits = async () => {
    try {
      // console.log('CONTEXT: GET ACTIVE HABITS');
      const res = await fetcher(`${server}/api/habits/active`);
      const habits = res.data;
      dispatch({ type: GET_HABITS_SUCCESS, payload: habits });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_HABITS_FAILURE, payload: err });
    }
  };

  const getHabit = async (id) => {
    try {
      // console.log('CONTEXT: GET HABIT');
      const res = await fetcher(`${server}/api/habits/${id}`);
      const habit = res.data;
      dispatch({ type: GET_HABIT_SUCCESS, payload: habit });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_HABIT_FAILURE, payload: err });
    }
  };
  const addHabit = async (habit) => {
    try {
      console.log('CONTEXT: ADD HABIT');
      const res = await fetcher(`${server}/api/habits/`, {
        method: 'POST',
        body: JSON.stringify(habit),
      });
      const updatedHabit = res.data;
      const habitsRes = await fetcher(`${server}/api/habits`);
      const updatedHabits = habitsRes.data;
      const payload = { habit: updatedHabit, habits: updatedHabits };
      dispatch({ type: ADD_HABIT_SUCCESS, payload: payload });
    } catch (err) {
      console.error(err);
      dispatch({ type: ADD_HABIT_FAILURE, payload: err });
    }
  };

  const deleteHabit = async (id) => {
    try {
      // console.log('CONTEXT: DELETE HABIT');
      const deletedHabitRes = await fetcher(`${server}/api/habits/${id}`, {
        method: 'DELETE',
      });
      const deletedHabit = deletedHabitRes.data;
      const habitsRes = await fetcher(`${server}/api/habits`);
      const habits = habitsRes.data;
      const payload = { habit: deletedHabit, habits: habits };
      dispatch({ type: DELETE_HABIT_SUCCESS, payload: payload });
    } catch (err) {
      console.log(err);
      dispatch({ type: DELETE_HABIT_FAILURE, payload: err });
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
  const unassignTask = async (taskId, tasks, day) => {
    console.log('TRYING TO UNASSIGN A TASK IN CONTEXT!');
    try {
      // Check if task is a habit task
      const isHabitTask =
        tasks.filter((task) => task._id === taskId).length > 0;
      // If task is a habit task, delete straight away
      if (isHabitTask) {
        deleteTask(taskId);
        return;
      }
      // If not,
      // 1. Update task: remove dateAssigned, remove day field
      const taskRes = await fetcher(`${server}/api/tasks/${taskId}`, {
        method: 'PUT',
        body: JSON.stringify({ dateAssigned: null, day: null }),
      });
      const updatedTask = taskRes.data;
      console.log('This task was updated, ', updatedTask);
      // 2. Update global tasks list
      const tasksRes = await fetcher(`${server}/api/tasks/`);
      const updatedTasks = tasksRes.data;
      console.log('This tasks list was updated: ', updatedTasks);
      // 3. Update day's tasks list
      const dayRes = await fetcher(`${server}/api/days/${day._id}`, {
        method: 'PUT',
        body: JSON.stringify({ $pull: { tasks: taskId } }),
      });
      const updatedDay = dayRes.data;
      console.log('This day was updated: ', updatedDay);
      // 4. Dispatch action to update task, tasks, and day state objects
      const payload = {
        task: updatedTask,
        tasks: updatedTasks,
        day: updatedDay,
      };
      dispatch({ type: UNASSIGN_TASK_SUCCESS, payload: payload });
    } catch (error) {
      console.error(error);
      dispatch({ type: UNASSIGN_TASK_FAILURE, payload: error });
    }
  };

  const assignHabitToToday = async (habitId, day) => {
    try {
      console.log('Trying to assign habit to today in context!');
      // Create a new task for every task in habit's tasks array
      // New tasks should be active, incomplete, have a linked habitId,
      // a linked dayId, and a dateAssigned of today.
      // Add those tasks to today array
      //
    } catch (error) {
      console.error(error);
    }
  };

  //           //
  //           //
  //  PROFILE  //
  //           //
  //           //

  const getProfile = async () => {
    try {
      const res = await fetcher(`${server}/api/profile`);
      const profile = res.data;
      dispatch({ type: GET_PROFILE_SUCCESS, payload: profile });
    } catch (error) {
      console.error(error);
      dispatch({ type: GET_PROFILE_FAILURE, payload: error });
    }
  };

  const updateProfile = async (profile) => {
    try {
      const res = await fetcher(`${server}/api/profile`, {
        method: 'PUT',
        body: JSON.stringify(profile),
      });
      const updatedProfile = res.data;
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: updatedProfile });
    } catch (err) {
      console.log(err);
      dispatch({ type: UPDATE_PROFILE_FAILURE, payload: err });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        habits: state.habits,
        habit: state.habit,
        day: state.day,
        profile: state.profile,
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
        getActiveHabits,
        getHabit,
        addHabit,
        deleteHabit,
        getProfile,
        updateProfile,
        getToday,
        assignTaskToDay,
        unassignTask,
        assignHabitToToday,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
