import styled from 'styled-components';

const StyledFooter = styled.div`
  flex-shrink: 0;
  height: 100px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 2px solid ${({ theme }) => theme.colors.lightGrey};
`;

export default function Footer(params) {
  return (
    <StyledFooter>
      <p>TodayApp | Dillon Titcomb | 2021</p>
    </StyledFooter>
  );
}
