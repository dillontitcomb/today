import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.div`
  background-color: ${(props) =>
    props.secondary
      ? props.theme.colors.secondary
      : props.theme.colors.background};
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  text-align: center;
`;

const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Button = styled.button`
  display: inline-block;
  background-color: ${(props) =>
    props.secondary
      ? props.theme.colors.lightGrey
      : props.theme.colors.primary};
  font-size: 1rem;
  color: ${(props) =>
    props.secondary
      ? props.theme.colors.darkText
      : props.theme.colors.lightText};
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryAccent};
  }
`;

export default function styles(params) {
  return (
    <div>
      <Title>Style Guide!</Title>
      <Container secondary>
        <p>This is some text</p>
        <FlexContainer>
          <Button>Primary Button</Button>
          <Button secondary>Button Secondary</Button>
          <p>Card body</p>
        </FlexContainer>
      </Container>
    </div>
  );
}
