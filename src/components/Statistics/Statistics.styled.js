import styled from 'styled-components';

export const MainStatItem = styled.li`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.btn.backgroundGood};

  :not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }

  & > p {
    font-size: ${p => p.theme.fontSizes.texts}px;
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights[0]};

    color: ${p => p.theme.colors.texts};
  }
`;

export const OtherStatItem = styled.li`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.btn.backgroundGood};

  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }

  & > p {
    font-size: ${p => p.theme.fontSizes.texts}px;
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights[0]};

    color: ${p => p.theme.colors.texts};
  }
`;
