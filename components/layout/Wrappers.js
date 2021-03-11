import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.offwhite
      ? props.theme.colors.lightGrey
      : props.theme.colors.background};
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: ${(props) => (props.nopad ? 0 : 1)}rem;
  text-align: center;
`;

export const GridColumnsContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.cols ? props.cols : 2)},
    auto
  );
  grid-gap: ${(props) => (props.gridgap ? props.gridgap : 0)}rem;
  justify-content: center;

  > * {
    place-self: center;
  }
`;

export const GridRowsContainer = styled(Container)`
  display: grid;
  grid-template-rows: repeat(${(props) => (props.rows ? props.rows : 2)}, auto);
  grid-gap: ${(props) => (props.gridgap ? props.gridgap : 0)}rem;
  justify-content: center;
`;

export const SplitPanel = ({ left, right }) => {
  return (
    <GridColumnsContainer cols='2'>
      <Container nopad>{left}</Container>
      <Container nopad>{right}</Container>
    </GridColumnsContainer>
  );
};
