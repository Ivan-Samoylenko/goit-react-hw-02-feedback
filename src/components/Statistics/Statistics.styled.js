import styled from 'styled-components';
import { getStatBackgroundColor } from 'utils';

export const MainStatItem = styled.li`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;

  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;

  background-color: ${getStatBackgroundColor}};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }

  & > p {
    font-size: ${p => p.theme.fontSizes.texts}px;
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights[0]};

    color: ${p => p.theme.colors.texts};
  }

  ${p => p.theme.mediaQueries.medium} {
    :not(:last-child) {
      margin-right: ${p => p.theme.space[3]}px;
      margin-bottom: ${p => p.theme.space[0]}px;
    }
  }
`;

export const OtherStatItem = styled.li`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;

  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;

  background-color: ${p => p.theme.colors.btn.backgroundGood};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }

  & > p {
    flex-shrink: 9000;

    font-size: ${p => p.theme.fontSizes.texts}px;
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights[0]};

    color: ${p => p.theme.colors.texts};
  }

  ${p => p.theme.mediaQueries.medium} {
    :not(:last-child) {
      margin-right: ${p => p.theme.space[4]}px;
      margin-bottom: ${p => p.theme.space[0]}px;
    }
  }
`;
