import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from '../components/layout/Buttons';
import { List, ListItem } from '../components/layout/Lists';

const LandingContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderText = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const SubHeaderText = styled.p`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.6rem;
  text-align: center;
  font-weight: lighter;
`;

const HeroText = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ButtonContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const ListDisplayContainer = styled.div`
  width: 400px;
  margin: 2rem auto 0 auto;
`;

const index = () => {
  const [session, loading] = useSession();
  if (loading) return <p>Loading...</p>;
  return (
    <LandingContainer>
      <HeaderText>
        Welcome to <HeroText>Today</HeroText>
      </HeaderText>
      <SubHeaderText>
        The personalized to-do list app and habit tracker that helps you focus
        on today
      </SubHeaderText>
      <ButtonContainer>
        {session ? (
          <Link href='/today'>
            <Button buttonstyle='secondary' large>
              Plan Your Day
            </Button>
          </Link>
        ) : (
          <Button onClick={signIn} buttonstyle='primary' large>
            Get Started
          </Button>
        )}
      </ButtonContainer>
      <ListDisplayContainer>
        <List>
          <ListItem>Learn to use TodayApp</ListItem>
          <ListItem>Add my tasks and habits</ListItem>
          <ListItem>Create detailed daily plans</ListItem>
          <ListItem>Get more stuff done</ListItem>
        </List>
      </ListDisplayContainer>
    </LandingContainer>
  );
};

export default index;
