import styled from 'styled-components';
import { SubText } from '../../layout/Typography';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

// const DetailsText = styled.span`
//   font-size: .;
// `;

// Add DetailsContent for urgency, resistance, and time indicators
// Add DetailsActions for interaction buttons (edit, delete)

export default function TaskDetails({ task }) {
  return (
    <DetailsContainer>
      <SubText>{task.resistance} res</SubText>
      <SubText>{task.urgency} urg</SubText>
      <SubText>{task.time} minutes</SubText>
    </DetailsContainer>
  );
}
