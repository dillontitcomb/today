import {
  Button,
  MinusButton,
  MinusOutlineButton,
  OutlineButton,
  PlusButton,
  PlusOutlineButton,
} from '../../components/layout/Buttons';
import { Title } from '../../components/layout/Typography';
import {
  Container,
  GridColumnsContainer,
} from '../../components/layout/Wrappers';

export default function buttons(props) {
  return (
    <>
      <Title>Buttons</Title>
      <Container secondary>
        <GridColumnsContainer cols='4' gridgap='1'>
          <Button>Default</Button>
          <Button buttonstyle='primary'>Primary</Button>
          <Button buttonstyle='secondary'>Secondary</Button>
          <Button buttonstyle='disabled'>Disabled</Button>
          <OutlineButton>Default</OutlineButton>
          <OutlineButton buttonstyle='primary'>Primary</OutlineButton>
          <OutlineButton buttonstyle='secondary'>Secondary</OutlineButton>
          <OutlineButton buttonstyle='disabled'>Disabled</OutlineButton>
          <PlusButton></PlusButton>
          <PlusButton buttonstyle='primary' />
          <MinusButton buttonstyle='secondary' />
          <MinusButton buttonstyle='disabled' />
          <PlusOutlineButton />
          <PlusOutlineButton buttonstyle='primary' />
          <MinusOutlineButton buttonstyle='secondary' />
          <MinusOutlineButton buttonstyle='disabled' />
        </GridColumnsContainer>
      </Container>
    </>
  );
}
