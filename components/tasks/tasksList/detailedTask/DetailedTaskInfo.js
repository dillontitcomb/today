import styled from 'styled-components';
import { ListInfoLabel } from '../../../layout/Lists';

const Centered = styled.div`
  text-align: center;
`;

export default function DetailedTaskInfo({ task }) {
  return (
    <Centered>
      {task.time <= 15 ? (
        <ListInfoLabel labelType='success'>Quick</ListInfoLabel>
      ) : (
        ''
      )}
      {task.resistance === 0 ? (
        <ListInfoLabel labelType='success'>Mellow</ListInfoLabel>
      ) : task.resistance === 3 ? (
        <ListInfoLabel labelType='danger'>Stressful</ListInfoLabel>
      ) : (
        ''
      )}
      {task.urgency === 3 ? (
        <ListInfoLabel labelType='danger'>Urgent</ListInfoLabel>
      ) : (
        ''
      )}
    </Centered>
  );
}
