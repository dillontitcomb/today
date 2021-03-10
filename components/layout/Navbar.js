import styled from 'styled-components';

const Navigation = styled.nav`
  border: none;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
  box-shadow: 0px 1px 5px 0 ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.background};
`;

export default function Navbar({ children }) {
  return (
    <Navigation>
      {/* TODO: Fix the right side of the nav */}
      <p>Here's the nav sucka</p>
    </Navigation>
  );
}
