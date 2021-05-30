import {
  ADD_HABIT_SUCCESS,
  ADD_HABIT_FAILURE,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  GET_HABITS_SUCCESS,
  GET_HABITS_FAILURE,
  GET_HABIT_SUCCESS,
  GET_HABIT_FAILURE,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  GET_TASK_SUCCESS,
  GET_TASK_FAILURE,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  DELETE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  DELETE_HABIT_FAILURE,
  DELETE_HABIT_SUCCESS,
  MARK_TASK_COMPLETE_SUCCESS,
  MARK_TASK_COMPLETE_FAILURE,
  GET_TODAY_SUCCESS,
  GET_TODAY_FAILURE,
  ASSIGN_TASK_TO_DAY_SUCCESS,
  ASSIGN_TASK_TO_DAY_FAILURE,
  UNASSIGN_TASK_FAILURE,
  UNASSIGN_TASK_SUCCESS,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
} from '../types';

export default function globalReducer(state, action) {
  switch (action.type) {
    // TASKS
    case UPDATE_TASK_SUCCESS:
    case MARK_TASK_COMPLETE_SUCCESS:
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        task: action.payload.task,
        tasks: action.payload.tasks,
        loading: false,
      };
    case GET_TASKS_SUCCESS:
    case DELETE_TASK_SUCCESS:
      return { ...state, tasks: action.payload, loading: false };
    case GET_TASK_SUCCESS:
      return { ...state, tasks: action.payload, loading: false };

    // HABITS
    case GET_HABITS_SUCCESS:
      return { ...state, habits: action.payload, loading: false };
    case GET_HABIT_SUCCESS:
      return {
        ...state,
        habit: action.payload,
        loading: false,
      };
    case ADD_HABIT_SUCCESS:
    case DELETE_HABIT_SUCCESS:
      return {
        ...state,
        habit: action.payload.habit,
        habits: action.payload.habits,
        loading: false,
      };

    // TODAY
    case GET_TODAY_SUCCESS:
      return { ...state, loading: false, day: action.payload };
    case ASSIGN_TASK_TO_DAY_SUCCESS:
    case UNASSIGN_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        task: action.payload.task,
        tasks: action.payload.tasks,
        day: action.payload.day,
      };

    // PROFILE
    case GET_PROFILE_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      return { ...state, profile: action.payload, loading: false };

    // FAILURE
    case GET_TASKS_FAILURE:
    case GET_TASK_FAILURE:
    case UPDATE_TASK_FAILURE:
    case DELETE_TASK_FAILURE:
    case MARK_TASK_COMPLETE_FAILURE:
    case ADD_TASK_FAILURE:
    case GET_HABITS_FAILURE:
    case GET_HABIT_FAILURE:
    case ADD_HABIT_FAILURE:
    case DELETE_HABIT_FAILURE:
    case GET_TODAY_FAILURE:
    case ASSIGN_TASK_TO_DAY_FAILURE:
    case UNASSIGN_TASK_FAILURE:
    case GET_PROFILE_FAILURE:
    case UPDATE_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
