import {
  ListContainer,
  ListItem,
  PlusMinusListItem,
} from '../../components/layout/Lists';
import { Container, SplitPanel } from '../../components/layout/Wrappers';

const leftPanel = (
  <ListContainer offwhite>
    <PlusMinusListItem muted>Hello There</PlusMinusListItem>
    <PlusMinusListItem>Hello Again</PlusMinusListItem>
    <PlusMinusListItem disabled>One Last Time</PlusMinusListItem>
    <PlusMinusListItem muted>Hello There</PlusMinusListItem>
    <PlusMinusListItem>Hello Again</PlusMinusListItem>
    <PlusMinusListItem disabled>One Last Time</PlusMinusListItem>
  </ListContainer>
);
const rightPanel = (
  <ListContainer secondary>
    <ListItem>Hello</ListItem>
    <ListItem>Bonjour</ListItem>
    <ListItem>Hola</ListItem>
    <ListItem>Hello</ListItem>
    <ListItem>Bonjour</ListItem>
    <ListItem>Hola</ListItem>
  </ListContainer>
);

export default function lists(params) {
  return (
    <Container primary nopad>
      <h1>Lists</h1>
      <SplitPanel left={leftPanel} right={rightPanel} />
    </Container>
  );
}
