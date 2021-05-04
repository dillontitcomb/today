import styled from 'styled-components';
import { Lead } from '../layout/Typography';

const StyledFooter = styled.div`
  flex-shrink: 0;
  height: 60px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0px 1px 5px 0 ${({ theme }) => theme.colors.darkGrey};
`;

export default function Footer(params) {
  return (
    <StyledFooter>
      <Lead>TodayApp | Dillon Titcomb | 2021</Lead>
    </StyledFooter>
  );
}
