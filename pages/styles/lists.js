import {
  ListItem,
  PlusMinusListItem,
  List,
} from '../../components/layout/Lists';
import { Container, SplitPane, Pane } from '../../components/layout/Wrappers';

export default function lists(params) {
  return (
    <Container offwhite nopad>
      <h1>Lists</h1>
      <SplitPane>
        <Pane>
          <List marginsm>
            <PlusMinusListItem muted>Hello There</PlusMinusListItem>
            <PlusMinusListItem>Hello Again</PlusMinusListItem>
            <PlusMinusListItem disabled>One Last Time</PlusMinusListItem>
            <PlusMinusListItem muted>Hello There</PlusMinusListItem>
            <PlusMinusListItem>Hello Again</PlusMinusListItem>
            <PlusMinusListItem disabled>One Last Time</PlusMinusListItem>
          </List>
        </Pane>
        <Pane>
          <List marginsm>
            <ListItem>Hello</ListItem>
            <ListItem>Bonjour</ListItem>
            <ListItem>Hola</ListItem>
            <ListItem>Hello</ListItem>
            <ListItem>Bonjour</ListItem>
            <ListItem>Hola</ListItem>
          </List>
        </Pane>
      </SplitPane>
    </Container>
  );
}
