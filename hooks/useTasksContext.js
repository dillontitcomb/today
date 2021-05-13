import TasksContext from '../context/tasks/tasksContext';
import { useContext } from 'react';

export default function useTasksContext() {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error('useTasksContext must be used within a provider');
  }
  return context;
}
