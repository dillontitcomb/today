import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const handleBgColor = ({ buttonstyle, theme }) => {
  switch (buttonstyle) {
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

const handleTextColor = ({ buttonstyle, theme }) => {
  switch (buttonstyle) {
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

const handleBgHoverColor = ({ buttonstyle, theme }) => {
  switch (buttonstyle) {
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

const handleOutlineBgHoverColor = ({ buttonstyle, theme }) => {
  switch (buttonstyle) {
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
const handleOutlineTextColor = ({ buttonstyle, theme }) => {
  switch (buttonstyle) {
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

export const Button = styled.button`
  width: ${(props) => (props.$fill ? '100%' : 'inherit')};
  background-color: ${(props) => handleBgColor(props)};
  font-size: ${(props) => (props.small ? 0.8 : props.large ? 1.2 : 1)}rem;
  color: ${(props) => handleTextColor(props)};
  padding: ${(props) => (props.small ? 0.3 : props.large ? 0.7 : 0.5)}rem;
  border: none;
  cursor: pointer;
  border-radius: ${(props) => (props.noradius ? 0 : 5)}px;
  &:hover {
    background-color: ${(props) => handleBgHoverColor(props)};
    cursor: ${(props) =>
      props.buttonstyle == 'disabled' ? 'not-allowed' : 'pointer'};
  }
  > * {
    color: ${(props) => handleTextColor(props)};
  }
`;

export const DeleteButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.danger};
  color: ${(props) => props.theme.colors.lightText};
  &:hover {
    background-color: ${(props) => props.theme.colors.dangerDulled};
  }
`;
export const SuccessButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.success};
  color: ${(props) => props.theme.colors.lightText};
  &:hover {
    background-color: ${(props) => props.theme.colors.successLight};
  }
`;

export const OutlineButton = styled.button`
  font-size: ${(props) => (props.small ? 0.8 : props.large ? 1.2 : 1)}rem;
  padding: ${(props) => (props.small ? 0.3 : props.large ? 0.7 : 0.5)}rem;
  border-radius: ${(props) => (props.noradius ? 0 : 5)}px;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  border: 2px solid ${(props) => handleOutlineBgHoverColor(props)};
  color: ${(props) => handleOutlineTextColor(props)};
  &:hover {
    opacity: ${(props) => (props.buttonstyle == 'disabled' ? 1 : 0.8)};
    cursor: ${(props) =>
      props.buttonstyle == 'disabled' ? 'not-allowed' : 'pointer'};
  }
  > * {
    color: ${(props) => handleOutlineTextColor(props)};
  }
`;

export const IconButton = styled(Button)`
  min-height: 0px;
  min-width: 0px;
  padding: 0;
  margin: 0;
  height: ${(props) => (props.small ? 1.5 : props.large ? 2.5 : 2)}rem;
  width: ${(props) => (props.small ? 1.5 : props.large ? 2.5 : 2)}rem;
  border-radius: 100%;
`;

export const IconOutlineButton = styled(OutlineButton)`
  min-height: 0px;
  min-width: 0px;
  padding: 0;
  margin: 0;
  height: ${(props) => (props.small ? 1.5 : props.large ? 2.5 : 2)}rem;
  width: ${(props) => (props.small ? 1.5 : props.large ? 2.5 : 2)}rem;
  border-radius: 100%;
`;

export const PlusOutlineButton = (props) => {
  return (
    <IconOutlineButton {...props}>
      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
    </IconOutlineButton>
  );
};
export const MinusOutlineButton = (props) => {
  return (
    <IconOutlineButton {...props}>
      <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
    </IconOutlineButton>
  );
};

export const PlusButton = (props) => {
  return (
    <IconButton {...props}>
      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
    </IconButton>
  );
};
export const MinusButton = (props) => {
  return (
    <IconButton {...props}>
      <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
    </IconButton>
  );
};
