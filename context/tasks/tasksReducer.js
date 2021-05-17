import {
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  GET_TASK_SUCCESS,
  GET_TASK_FAILURE,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    // In case of success
    case GET_TASKS_SUCCESS:
      return { ...state, tasks: action.payload, loading: false };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        task: action.payload.task,
        tasks: action.payload.tasks,
        loading: false,
      };
    case GET_TASK_SUCCESS:
      return { ...state, task: action.payload, loading: false };
    // In case of failure
    case GET_TASKS_FAILURE:
    case GET_TASK_FAILURE:
    case UPDATE_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
