import styled from 'styled-components';
import {
  MinusOutlineButton,
  PlusOutlineButton,
} from '../../components/layout/Buttons';
import {
  Container,
  GridColumnsContainer,
} from '../../components/layout/Wrappers';

const ListContainer = styled.div`
  width: 100%;
  /* border: 1px solid ${({ theme }) => theme.colors.midGrey}; */
  text-align: left;
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
  grid-gap: 0.2rem;
  justify-content: center;
  padding: 0.2rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.midGrey};
  }
  > * {
    place-self: center;
  }
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
      <PlusOutlineButton buttonstyle={plusStyle}></PlusOutlineButton>
      <p>{props.children}</p>
      <MinusOutlineButton buttonstyle={minusStyle}></MinusOutlineButton>
    </IconListItem>
  );
};

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
    </Container>
  );
}
