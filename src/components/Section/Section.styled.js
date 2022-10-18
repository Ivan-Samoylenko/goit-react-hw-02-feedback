import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes.headers}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights[0]};
  text-align: center;

  color: ${p => p.theme.colors.headers};
`;
