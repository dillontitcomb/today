import { useSession } from 'next-auth/client';
import { Title } from '../../components/layout/Typography';
import { Container, SplitPane } from '../../components/layout/Wrappers';
import SimpleAddTask from '../../components/tasks/SimpleAddTask';
import TasksList from '../../components/tasks/tasksList/TasksList';
import useTasks from '../../hooks/useTasks';

export default function tasks() {
  const [session, loading] = useSession();
  const { tasks, error } = useTasks();
  if (error) console.log(error);

  if (loading) return 'Loading...';
  if (!loading && !session) return <p>Access Denied</p>;

  return (
    <Container nopad offwhite expand>
      <SplitPane>
        <Container offwhite centeralign>
          <Title weight='bolder' primary>
            Your Tasks
          </Title>
          <TasksList tasks={tasks} />
        </Container>
        <Container nopad offwhite>
          <SimpleAddTask />
        </Container>
      </SplitPane>
    </Container>
  );
}
