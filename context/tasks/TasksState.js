import { server } from '../../config';
import { fetcher } from '../../utils/helperFunctions';
import TasksContext from './tasksContext';
import TasksReducer from './tasksReducer';
import { useReducer } from 'react';
import { GET_TASKS_FAILURE, GET_TASKS_SUCCESS } from '../types';

const TasksState = (props) => {
  const initialState = {
    tasks: [],
    task: {},
    loading: false,
    errors: {},
    error: {},
  };

  const [state, dispatch] = useReducer(TasksReducer, initialState);

  // Get all tasks
  const getTasks = async () => {
    try {
      console.log('Trying to fetch tasks via tasksstate');
      const res = await fetcher(`${server}/api/tasks`);
      const tasks = res.data;
      dispatch({ type: GET_TASKS_SUCCESS, payload: tasks });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_TASKS_FAILURE, payload: err });
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
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksState;
