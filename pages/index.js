import { signIn, useSession } from 'next-auth/client';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from '../components/layout/Buttons';
import { SeparatedList, SeparatedListItem } from '../components/layout/Lists';

const LandingContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.midGrey};
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
        <SeparatedList>
          <SeparatedListItem>Learn to use TodayApp</SeparatedListItem>
          <SeparatedListItem>Add my tasks and habits</SeparatedListItem>
          <SeparatedListItem>Create detailed daily plans</SeparatedListItem>
          <SeparatedListItem>Get more stuff done</SeparatedListItem>
        </SeparatedList>
      </ListDisplayContainer>
    </LandingContainer>
  );
};

export default index;
