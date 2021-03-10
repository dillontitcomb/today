import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const handleBgColorType = (style, theme) => {
  switch (style) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary;
    case 'disabled':
      return theme.colors.lightGrey;
    default:
      return theme.colors.midGrey;
  }
};

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

const handleTextColorType = (style, theme) => {
  switch (style) {
    case 'primary':
      return theme.colors.lightText;
    case 'secondary':
      return theme.colors.lightText;
    case 'disabled':
      return theme.colors.darkGrey;
    default:
      return theme.colors.darkText;
  }
};

const handleBgHoverColorType = (style, theme) => {
  switch (style) {
    case 'primary':
      return theme.colors.primaryDulled;
    case 'secondary':
      return theme.colors.secondaryDulled;
    case 'disabled':
      return theme.colors.lightGrey;
    default:
      return theme.colors.lightGrey;
  }
};

const handleOutlineBgHoverColor = (style, theme) => {
  switch (style) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary;
    case 'disabled':
      return theme.colors.darkGrey;
    default:
      return theme.colors.darkestGrey;
  }
};
const handleOutlineTextColor = (style, theme) => {
  switch (style) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary;
    case 'disabled':
      return theme.colors.darkGrey;
    default:
      return theme.colors.darkestGrey;
  }
};

const Button = styled.button`
  display: inline-block;
  background-color: ${(props) =>
    handleBgColorType(props.buttonstyle, props.theme)};
  font-size: 1rem;
  color: ${(props) => handleTextColorType(props.buttonstyle, props.theme)};
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) =>
      handleBgHoverColorType(props.buttonstyle, props.theme)};
    cursor: ${(props) =>
      props.buttonstyle == 'disabled' ? 'not-allowed' : 'pointer'};
  }
`;

const OutlineButton = styled.button`
  display: inline-block;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  border: 2px solid
    ${(props) => handleOutlineBgHoverColor(props.buttonstyle, props.theme)};
  color: ${(props) => handleOutlineTextColor(props.buttonstyle, props.theme)};
  &:hover {
    opacity: ${(props) => (props.buttonstyle == 'disabled' ? 1 : 0.8)};
    cursor: ${(props) =>
      props.buttonstyle == 'disabled' ? 'not-allowed' : 'pointer'};
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

const PlusButton = (props) => {
  return (
    <GridItem>
      <IconButton {...props}>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </IconButton>
    </GridItem>
  );
};
const MinusButton = (props) => {
  return (
    <GridItem>
      <IconButton {...props}>
        <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
      </IconButton>
    </GridItem>
  );
};

export default function styles(params) {
  return (
    <div>
      <Title>Style Guide!</Title>
      <Container buttonstyle='secondary'>
        <GridContainer>
          <GridItem>
            <Button>Default</Button>
          </GridItem>
          <GridItem>
            <Button buttonstyle='primary'>Primary</Button>
          </GridItem>
          <GridItem>
            <Button buttonstyle='secondary'>Secondary</Button>
          </GridItem>
          <GridItem>
            <Button buttonstyle='disabled'>Disabled</Button>
          </GridItem>
          <GridItem>
            <OutlineButton>Default</OutlineButton>
          </GridItem>
          <GridItem>
            <OutlineButton buttonstyle='primary'>Primary</OutlineButton>
          </GridItem>
          <GridItem>
            <OutlineButton buttonstyle='secondary'>Secondary</OutlineButton>
          </GridItem>
          <GridItem>
            <OutlineButton buttonstyle='disabled'>Disabled</OutlineButton>
          </GridItem>

          <PlusButton></PlusButton>
          <PlusButton buttonstyle='primary'></PlusButton>
          <MinusButton buttonstyle='secondary'></MinusButton>
          <MinusButton buttonstyle='disabled'></MinusButton>
        </GridContainer>
      </Container>
    </div>
  );
}
