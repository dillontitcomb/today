import styled from 'styled-components';
import { MinusOutlineButton, PlusOutlineButton } from './Buttons';

export const List = styled.div`
  margin: ${(props) =>
    props.marginsm ? 0.5 : props.marginmd ? 1 : props.marginlg ? 2 : 0}rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.midGrey};
  overflow: hidden;
  > div:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.midGrey};
  }
  p {
    padding: 0.5rem;
  }
  > p:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.midGrey};
  }
`;

export const ListItem = styled.div`
  padding: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    cursor: pointer;
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
