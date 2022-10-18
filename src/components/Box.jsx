import styled from 'styled-components';
import {
  color,
  space,
  typography,
  layout,
  flexbox,
  border,
  shadow,
} from 'styled-system';

export const Box = styled('div')(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  color,
  space,
  typography,
  layout,
  flexbox,
  border,
  shadow
);
