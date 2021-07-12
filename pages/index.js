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
  margin: 1rem auto 0 auto;
`;

const index = () => {
  const [session, loading] = useSession();
  if (loading) return <p>Loading...</p>;
  return (
    <LandingContainer>
      <HeaderText>
        Welcome to Rea<HeroText>list</HeroText>
      </HeaderText>
      <SubHeaderText>
        A straightforward to-do list app that knows not all tasks are created
        equal
      </SubHeaderText>
      <ButtonContainer>
        {session ? (
          <Link href='/tasks'>
            <Button buttonstyle='secondary' large>
              Get Started
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
          <SeparatedListItem>Start using Realist</SeparatedListItem>
          <SeparatedListItem>Add my to-do's</SeparatedListItem>
          <SeparatedListItem>Understand my to-do's</SeparatedListItem>
          <SeparatedListItem>Get more done</SeparatedListItem>
        </SeparatedList>
      </ListDisplayContainer>
    </LandingContainer>
  );
};

export default index;
