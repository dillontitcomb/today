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

export const SeparatedList = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0.5rem;
`;

export const SeparatedListItem = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 0.8rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const SeparatedListItemSkeleton = styled(SeparatedListItem)`
  text-align: center;
  opacity: 0.5;
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

export const ListInfoLabel = styled.span`
  background-color: ${(props) => props.theme.colors.lightGrey};
  border-radius: 5px;
  padding: 0.3rem 0.3rem;
  margin: 0 0.3rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${(props) =>
    props.labelType
      ? props.theme.colors[props.labelType]
      : props.theme.colors.midText};
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
