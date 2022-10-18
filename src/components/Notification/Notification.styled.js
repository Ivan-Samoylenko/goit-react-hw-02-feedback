import styled from 'styled-components';

export const Message = styled.p`
  font-size: ${p => p.theme.fontSizes.texts}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights[0]};
  text-align: center;

  color: ${p => p.theme.colors.texts};
`;
