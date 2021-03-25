import styled from 'styled-components';
import useToday from '../../hooks/useToday';

const TodayContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default function today() {
  const [today, todayLoading, todayError] = useToday();

  return (
    <TodayContainer>
      <div>
        <h3>Habits</h3>
        <p>Item One</p>
        <p>Item Two</p>
        <p>Item Three</p>
      </div>
      <div>
        <h3>Assigned Today</h3>
        <p>Item One</p>
        <p>Item Two</p>
        <p>Item Three</p>
      </div>
      <div>
        <h3>Tasks</h3>
        <p>Item One</p>
        <p>Item Two</p>
        <p>Item Three</p>
      </div>
    </TodayContainer>
  );
}
