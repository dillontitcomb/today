import styled from 'styled-components';

const SplitScreen = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Pane = styled.div`
  background-color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.offwhite
      ? props.theme.colors.lightGrey
      : props.theme.colors.background};
`;

export default function habits(params) {
  return (
    <SplitScreen>
      <Pane secondary>Pane one</Pane>
      <Pane offwhite>Pane two</Pane>
    </SplitScreen>
  );
}
