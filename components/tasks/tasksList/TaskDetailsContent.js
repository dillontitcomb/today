import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
`;

const Resistance = styled.div`
  color: ${(props) =>
    props.resistance === 0
      ? props.theme.colors.success
      : props.resistance === 3
      ? props.theme.colors.danger
      : props.theme.colors.darkGrey};
`;
const Urgency = styled.div`
  color: ${(props) =>
    props.urgency === 0
      ? props.theme.colors.success
      : props.urgency === 3
      ? props.theme.colors.danger
      : props.theme.colors.darkGrey};
`;
const Time = styled.div`
  color: ${(props) =>
    props.time <= 15
      ? props.theme.colors.success
      : props.time >= 120
      ? props.theme.colors.danger
      : props.theme.colors.darkGrey};
`;

const DetailsText = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export default function TaskDetailsContent({ task }) {
  return (
    <Container>
      <Resistance resistance={task.resistance}>
        {task.resistance} <DetailsText>Res</DetailsText>
      </Resistance>
      <Urgency urgency={task.urgency}>
        {task.urgency} <DetailsText>Urg</DetailsText>
      </Urgency>
      <Time time={task.time}>
        {task.time}
        <DetailsText>Min</DetailsText>
      </Time>
    </Container>
  );
}
