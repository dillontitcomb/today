import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 1em;
  justify-content: center;
`;

const GridItem = styled.div`
  place-self: center;
  padding: 0.5rem;
`;

const Button = styled.button`
  min-width: 120px;
  max-height: 34.4px;
  display: inline-block;
  background-color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.disabled
      ? props.theme.colors.lightGrey
      : props.theme.colors.midGrey};
  font-size: 1rem;
  color: ${(props) =>
    props.primary || props.secondary
      ? props.theme.colors.lightText
      : props.disabled
      ? props.theme.colors.darkGrey
      : props.theme.colors.darkText};
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) =>
      props.primary
        ? props.theme.colors.primaryDulled
        : props.secondary
        ? props.theme.colors.secondaryDulled
        : props.theme.colors.lightGrey};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;

const IconButton = styled(Button)`
  min-height: 0px;
  min-width: 0px;
  padding: 0;
  margin: 0;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
`;

export default function styles(params) {
  return (
    <div>
      <Title>Style Guide!</Title>
      <Container secondary>
        <GridContainer>
          <GridItem>
            <Button>Default</Button>
          </GridItem>
          <GridItem>
            <Button primary>Primary</Button>
          </GridItem>
          <GridItem>
            <Button secondary>Secondary</Button>
          </GridItem>
          <GridItem>
            <Button disabled>Disabled</Button>
          </GridItem>
          <GridItem>
            <IconButton>
              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            </IconButton>
          </GridItem>
          <GridItem>
            <IconButton primary>
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </IconButton>
          </GridItem>
          <GridItem>
            <IconButton secondary>
              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            </IconButton>
          </GridItem>
          <GridItem>
            <IconButton disabled>
              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            </IconButton>
          </GridItem>
        </GridContainer>
      </Container>
    </div>
  );
}
