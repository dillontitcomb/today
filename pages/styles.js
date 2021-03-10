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
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const FlexGridItem = styled.div`
  padding: 0.5rem;
  flex: 1;
`;

const Button = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.lightText};
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDulled};
  }
`;

const SecondaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.lightText};
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryDulled};
  }
`;

const DangerButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.lightText};
  &:hover {
    background-color: ${(props) => props.theme.colors.dangerDulled};
  }
`;

export default function styles(params) {
  return (
    <div>
      <Title>Style Guide!</Title>
      <Container secondary>
        <FlexContainer>
          <FlexGridItem>
            <Button>Primary Button</Button>
          </FlexGridItem>
          <FlexGridItem>
            {' '}
            <SecondaryButton>Button Secondary</SecondaryButton>
          </FlexGridItem>
          <FlexGridItem>
            <DangerButton>Card body</DangerButton>
          </FlexGridItem>
        </FlexContainer>
      </Container>
    </div>
  );
}
