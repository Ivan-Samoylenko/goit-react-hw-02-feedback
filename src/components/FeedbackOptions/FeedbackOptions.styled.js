import styled from 'styled-components';
import { getBtnBackgroundColor } from 'utils';

export const Option = styled.li`
  :not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;

export const Button = styled.button`
  border: ${p => p.theme.borders.btn};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.btn}px;
  text-transform: capitalize;

  color: ${p => p.theme.colors.texts};
  background-color: ${getBtnBackgroundColor};

  border-radius: ${p => p.theme.radii.btn}px;
  box-shadow: ${p => p.theme.shadows.btn};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.btn.hover};

    box-shadow: ${p => p.theme.shadows.btnHover};
  }
`;
