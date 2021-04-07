import { useSession } from 'next-auth/client';
import { Title } from '../../components/layout/Typography';
import { Container, SplitPanel } from '../../components/layout/Wrappers';
import SimpleAddTask from '../../components/tasks/SimpleAddTask';
import TasksList from '../../components/tasks/TasksList';
import useTasks from '../../hooks/useTasks';

export default function tasks() {
  const [session, loading] = useSession();
  const { tasks, error } = useTasks();
  if (error) console.log(error);

  if (loading) return 'Loading...';
  if (!loading && !session) return <p>Access Denied</p>;

  const leftPanel = (
    <Container nopad leftalign>
      <Title primary>Your Tasks</Title>
      <TasksList tasks={tasks}></TasksList>
    </Container>
  );
  const rightPanel = (
    <Container nopad offwhite>
      <SimpleAddTask></SimpleAddTask>
    </Container>
  );

  return (
    <Container nopad offwhite expand>
      <Title>Welcome to your Tasks dashboard.</Title>
      <SplitPanel left={leftPanel} right={rightPanel}></SplitPanel>
    </Container>
  );
}
