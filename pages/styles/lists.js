import styled from 'styled-components';
import {
  MinusOutlineButton,
  PlusOutlineButton,
} from '../../components/layout/Buttons';
import {
  Container,
  GridColumnsContainer,
  SplitPanel,
} from '../../components/layout/Wrappers';

const ListContainer = styled.div`
  /* border: 1px solid ${({ theme }) => theme.colors.midGrey}; */
  text-align: left;
  background-color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.offwhite
      ? props.theme.colors.lightGrey
      : props.theme.colors.background};
`;

const ListItem = styled.li`
  display: block;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.midGrey};
  }
`;

const IconListItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 0.4rem;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.midGrey};
  }
  > * {
    place-self: center;
  }
`;

const PlusMinusText = styled.span`
  padding: 0.2rem;
`;

const PlusMinusListItem = (props) => {
  let plusStyle = 'primary';
  let minusStyle = 'secondary';
  if (props.muted) {
    plusStyle = '';
    minusStyle = '';
  } else if (props.disabled) {
    plusStyle = 'disabled';
    minusStyle = 'disabled';
  }
  return (
    <IconListItem>
      <PlusOutlineButton buttonstyle={plusStyle} small></PlusOutlineButton>
      <PlusMinusText>{props.children}</PlusMinusText>
      <MinusOutlineButton buttonstyle={minusStyle} small></MinusOutlineButton>
    </IconListItem>
  );
};

const leftPanel = (
  <ListContainer offwhite>
    <PlusMinusListItem muted>Hello There</PlusMinusListItem>
    <PlusMinusListItem>Hello Again</PlusMinusListItem>
    <PlusMinusListItem disabled>One Last Time</PlusMinusListItem>
  </ListContainer>
);
const rightPanel = (
  <ListContainer>
    <ListItem>Hello</ListItem>
    <ListItem>Bonjour</ListItem>
    <ListItem>Hola</ListItem>
  </ListContainer>
);

export default function lists(params) {
  return (
    <Container secondary>
      <h1>Lists</h1>
      <GridColumnsContainer offwhite cols='2' gridgap='2'>
        <ListContainer>
          <PlusMinusListItem muted>Hello There</PlusMinusListItem>
          <PlusMinusListItem>Hello Again</PlusMinusListItem>
          <PlusMinusListItem disabled>One Last Time</PlusMinusListItem>
        </ListContainer>
        <ListContainer>
          <ListItem>Hello</ListItem>
          <ListItem>Bonjour</ListItem>
          <ListItem>Hola</ListItem>
        </ListContainer>
      </GridColumnsContainer>
      <SplitPanel left={leftPanel} right={rightPanel} />
    </Container>
  );
}
