import styled from 'styled-components';
import { Lead } from '../layout/Typography';

const StyledFooter = styled.div`
  flex-shrink: 0;
  height: 60px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Lead>TodayApp | Dillon Titcomb | 2021</Lead>
    </StyledFooter>
  );
}
