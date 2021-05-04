import styled from 'styled-components';

const fontWeightLookup = {
  lightest: 200,
  light: 300,
  normal: 400,
  semibold: 500,
  bold: 600,
  bolder: 700,
  boldest: 800,
};

export const Title = styled.h1`
  color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.darkText};
  font-weight: ${(props) =>
    props.weight ? fontWeightLookup[props.weight] : 400};
`;

export const Subtitle = styled.h2`
  color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.darkText};
  font-weight: ${(props) =>
    props.weight ? fontWeightLookup[props.weight] : 400};
`;

export const Lead = styled.h3`
  color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.darkText};
  font-weight: ${(props) =>
    props.weight ? fontWeightLookup[props.weight] : 400};
`;

export const SubText = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${(props) =>
    props.weight ? fontWeightLookup[props.weight] : 400};
`;
