import { useSession } from 'next-auth/client';
import Accordion from '../../components/layout/Accordion';
import { Title } from '../../components/layout/Typography';
import { List } from '../../components/layout/Lists';
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
          <List>
            <Accordion title='Samwise Gamgee'>
              <p>This is a task's information</p>
            </Accordion>
          </List>
          <TasksList tasks={tasks}></TasksList>
        </Container>
        <Container nopad offwhite>
          <SimpleAddTask></SimpleAddTask>
        </Container>
      </SplitPane>
    </Container>
  );
}
