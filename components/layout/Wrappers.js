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
  max-width: ${(props) => (props.expand ? 4000 : 1200)}px;
  margin: auto;
  overflow: hidden;
  padding: ${(props) => (props.nopad ? 0 : 1)}rem;
  text-align: ${(props) =>
    props.leftalign
      ? 'left'
      : props.rightalign
      ? 'right'
      : props.centeralign
      ? 'center'
      : 'initial'};
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

export const SplitPane = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const TriplePane = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Pane = styled.div``;
