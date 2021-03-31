import styled from 'styled-components';

export const Form = styled.form`
  text-align: center;
  background-color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.background};
  display: block;
  margin: 1rem auto;
  padding-bottom: 1rem;
  border-radius: 10px;
`;

export const Input = styled.input`
  width: ${(props) =>
    props.small
      ? '80px'
      : props.large
      ? '140px'
      : props.xlarge
      ? '180px'
      : props.full
      ? '100%'
      : '100px'};
  border: none;
  display: inline-block;
  padding: 0.2rem;
  margin: 0 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.darkText};
`;

export const TextInput = (props) => <Input type='text' {...props}></Input>;
export const NumberInput = (props) => <Input type='number' {...props}></Input>;

export const Select = styled.select`
  display: inline-block;
  padding: 0.2rem;
  margin: 0 0.2rem;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.darkText};
`;

export const Option = styled.option`
  color: ${({ theme }) => theme.colors.darkText};
`;

export const StyledCheckbox = styled.input`
  width: 15px;
  height: 15px;
  margin: 0 0.5rem;
`;

export const Checkbox = (props) => (
  <StyledCheckbox type='checkbox' {...props}></StyledCheckbox>
);

export const FormMessage = styled.div`
  color: ${(props) =>
    props.messageStyle == 'danger'
      ? props.theme.colors.secondary
      : props.theme.colors.darkGrey};
  border: 2px solid
    ${(props) =>
      props.messageStyle == 'danger'
        ? props.theme.colors.secondary
        : props.theme.colors.darkGrey};
  border-radius: 20px;
  text-align: center;
  padding: 0.5rem;
  margin: 1rem;
`;
