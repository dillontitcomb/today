import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;
