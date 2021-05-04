import styled from 'styled-components';
import { MinusOutlineButton, PlusOutlineButton } from './Buttons';

export const ListContainer = styled.div`
  text-align: left;
  height: 100%;
  background-color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.offwhite
      ? props.theme.colors.lightGrey
      : props.theme.colors.background};
  color: ${(props) =>
    props.primary || props.secondary
      ? props.theme.colors.lightText
      : props.theme.colors.darkText};
`;

export const ListItem = styled.li`
  display: block;
  width: 100%;
  padding: 0.2rem 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.midGrey};
  }
`;
export const IconListItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 0.4rem;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 1rem;
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
export const PlusMinusListItem = (props) => {
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
