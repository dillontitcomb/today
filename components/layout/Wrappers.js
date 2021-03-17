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

  color: ${(props) =>
    props.primary || props.secondary
      ? props.theme.colors.lightText
      : props.offwhite
      ? props.theme.colors.darkText
      : props.theme.colors.darkText};
  max-width: ${(props) => (props.expand ? 4000 : 1200)}px;
  margin: auto;
  height: 100%;
  overflow: hidden;
  padding: ${(props) => (props.nopad ? 0 : 1)}rem;
  text-align: ${(props) =>
    props.leftalign ? 'left' : props.rightalign ? 'right' : 'center'};
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

const StyledSplitPane = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  > * {
    place-self: stretch;
  }
`;

export const SplitPanel = ({ left, right }) => {
  return (
    <StyledSplitPane>
      <div>{left}</div>
      <div>{right}</div>
    </StyledSplitPane>
  );
};
