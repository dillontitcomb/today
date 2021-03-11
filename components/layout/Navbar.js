import Link from 'next/link';
import styled from 'styled-components';

const Navigation = styled.nav`
  padding: 1.2rem;
  border: none;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 5px 0 ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.background};
`;

const NavLogo = styled.a`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
    padding: 0 0.6rem;
  }
`;

const NavLinkContainer = styled.div`
  text-align: right;
  justify-content: end;
`;

const NavLink = styled.a`
  display: inline-block;
  font-size: 1.2rem;
  padding: 0rem 1rem;
  color: ${({ theme }) => theme.colors.darkText};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
    padding: 0 0.4rem;
  }
`;

export default function Navbar() {
  return (
    <Navigation>
      <div>
        <Link href='/'>
          <NavLogo>Today ✓</NavLogo>
        </Link>
      </div>
      <NavLinkContainer>
        <Link href='/styles'>
          <NavLink>Style Guide</NavLink>
        </Link>
        <Link href='/about'>
          <NavLink>About</NavLink>
        </Link>
        <Link href='/habits'>
          <NavLink>Your Habits</NavLink>
        </Link>
        <Link href='/tasks'>
          <NavLink>Your Tasks</NavLink>
        </Link>
      </NavLinkContainer>
    </Navigation>
  );
}
