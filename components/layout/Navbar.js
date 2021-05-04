import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import styled from 'styled-components';

const Navigation = styled.nav`
  border: none;
  height: 60px;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 5px 0 ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 0;
  border-radius: 20px;
`;

const NavLogo = styled.a`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondaryDulled};
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
  padding: 0rem 0.8rem;
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryDulled};
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
    padding: 0 0.4rem;
  }
`;

export default function Navbar() {
  const [session, loading] = useSession();

  return (
    <Navigation>
      <div>
        <Link href='/'>
          <NavLogo>Today ✓</NavLogo>
        </Link>
      </div>
      <NavLinkContainer>
        <Link href='/today'>
          <NavLink>Today</NavLink>
        </Link>
        <Link href='/habits'>
          <NavLink>Habits</NavLink>
        </Link>
        <Link href='/tasks'>
          <NavLink>Tasks</NavLink>
        </Link>
        {session && (
          <>
            <Link href='/profile'>
              <NavLink>Settings</NavLink>
            </Link>
            <NavLink onClick={signOut}>Log Out</NavLink>
          </>
        )}
        {!session && (
          <>
            <NavLink onClick={signIn}>Log In</NavLink>
          </>
        )}
      </NavLinkContainer>
    </Navigation>
  );
}
