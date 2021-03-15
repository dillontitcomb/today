import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.darkText};
`;

export const Subtitle = styled.h2`
  text-align: center;
  color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.darkText};
`;

export const Lead = styled.h3`
  text-align: center;
  color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.darkText};
`;
