import { useSession } from 'next-auth/client';
import { Title } from '../../components/layout/Typography';
import { Container, SplitPane } from '../../components/layout/Wrappers';
import SimpleAddTask from '../../components/tasks/SimpleAddTask';
import TasksList from '../../components/tasks/tasksList/TasksList';
import useTasksContext from '../../hooks/useTasksContext';
import { useEffect } from 'react';

export default function tasks() {
  const [session, loading] = useSession();
  if (!loading && !session) return <p>Access Denied</p>;

  const { tasks, getTasks } = useTasksContext();

  useEffect(() => {
    getTasks();
  }, []);

  console.log(tasks);
  return (
    <Container nopad offwhite expand>
      <SplitPane>
        <Container offwhite centeralign>
          <Title weight='bolder' primary>
            Your Tasks
          </Title>
          <TasksList tasks={tasks}></TasksList>
        </Container>
        <Container nopad offwhite>
          <SimpleAddTask></SimpleAddTask>
        </Container>
      </SplitPane>
    </Container>
  );
}
