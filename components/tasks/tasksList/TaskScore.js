import styled from 'styled-components';
import { Lead } from '../../layout/Typography';

const ScoreContainer = styled.div`
  height: 32px;
  width: 32px;
  background-color: ${(props) =>
    props.score > 4
      ? props.theme.colors.danger
      : props.score > 2
      ? props.theme.colors.warning
      : props.score > 1
      ? props.theme.colors.neutral
      : props.theme.colors.successLight};
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 50%;
`;

export default function TaskScore({ score }) {
  return (
    <ScoreContainer score={score}>
      <Lead weight='light'>{score}</Lead>
    </ScoreContainer>
  );
}
