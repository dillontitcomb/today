import styled from 'styled-components';
import { Button } from '../components/layout/Buttons';

const Wrapper = styled.div`
  max-width: 1200px;
  text-align: center;
  background-color: white;
  margin: 2rem;
  border-radius: 20px;
  /* border: 1px solid ${(props) => props.theme.colors.midGrey}; */
`;

const Title = styled.h1`
  padding: 2rem;
  font-size: 4rem;
  font-weight: lighter;
`;

const Hero = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};
`;
const SmallHero = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

const Accent = styled.div`
  height: 300px;
  display: block;
  background-color: ${(props) => props.theme.colors.accent};
`;

const ColoredSection = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
`;

export default function colorscheme(params) {
  return (
    <Wrapper>
      <Title>
        Welcome to <Hero>Today</Hero>
      </Title>
      <Accent>
        <Title>
          <SmallHero>Here are your tasks:</SmallHero>
        </Title>
        <Button buttonstyle='secondary' large>
          Sign Up
        </Button>
      </Accent>
      <ColoredSection>
        <h3>Here's more text in this section</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores
          eligendi voluptas nesciunt quam magnam dolorem perspiciatis veritatis
          nemo, doloribus praesentium esse ad aliquid cumque quod inventore id
          assumenda vitae? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quaerat, nesciunt! Nostrum, cumque perferendis error aliquam
          exercitationem asperiores, consectetur consequatur voluptas assumenda
          illum dolores. Deleniti, dolores. Laboriosam pariatur dignissimos
          vitae eos?
        </p>
        <Button buttonstyle='secondary' large>
          Submit
        </Button>
      </ColoredSection>
    </Wrapper>
  );
}
