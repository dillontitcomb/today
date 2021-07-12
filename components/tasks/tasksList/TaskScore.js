import styled from 'styled-components';
import { Lead } from '../../layout/Typography';

const ScoreContainer = styled.div`
  height: 32px;
  width: 32px;
  background-color: ${(props) =>
    props.score > 7
      ? props.theme.colors.danger
      : props.score > 6
      ? props.theme.colors.dangerLight
      : props.score > 5
      ? props.theme.colors.warning
      : props.score > 4
      ? props.theme.colors.neutral
      : props.score > 2
      ? props.theme.colors.successLight
      : props.theme.colors.success};
  color: ${(props) => props.theme.colors.lightText};
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: center;
  border-radius: 50%;
`;

export default function TaskScore({ score }) {
  return (
    <ScoreContainer score={score}>
      <Lead>{score}</Lead>
    </ScoreContainer>
  );
}
