import { GET_TASKS_SUCCESS, GET_TASKS_FAILURE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS_SUCCESS:
      return { ...state, tasks: action.payload, loading: false };
    case GET_TASKS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
