import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const handleBgColorType = ({ buttonstyle, theme }) => {
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

const handleTextColorType = ({ buttonstyle, theme }) => {
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

const handleBgHoverColorType = ({ buttonstyle, theme }) => {
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
  display: inline-block;
  background-color: ${(props) => handleBgColorType(props)};
  font-size: 1rem;
  color: ${(props) => handleTextColorType(props)};
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => handleBgHoverColorType(props)};
    cursor: ${(props) =>
      props.buttonstyle == 'disabled' ? 'not-allowed' : 'pointer'};
  }
`;

export const OutlineButton = styled.button`
  display: inline-block;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  border: 2px solid ${(props) => handleOutlineBgHoverColor(props)};
  color: ${(props) => handleOutlineTextColor(props)};
  &:hover {
    opacity: ${(props) => (props.buttonstyle == 'disabled' ? 1 : 0.8)};
    cursor: ${(props) =>
      props.buttonstyle == 'disabled' ? 'not-allowed' : 'pointer'};
  }
`;

export const IconButton = styled(Button)`
  min-height: 0px;
  min-width: 0px;
  padding: 0;
  margin: 0;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
`;

export const IconOutlineButton = styled(OutlineButton)`
  min-height: 0px;
  min-width: 0px;
  padding: 0;
  margin: 0;
  height: 2rem;
  width: 2rem;
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