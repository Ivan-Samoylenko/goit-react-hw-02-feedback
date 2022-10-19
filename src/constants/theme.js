export const theme = {
  colors: {
    texts: '#1F041D',
    headers: '#410547',
    accent: '#A638F5',
    background: '#EEBDFF',
    btn: {
      backgroundGood: '#84F538',
      backgroundNeutral: '#EFF538',
      backgroundBad: '#F56438',
      hover: 'rgba(166, 56, 245, 0.5)',
    },
  },
  space: [0, 4, 8, 16, 32, 64],
  fontSizes: {
    headers: 48,
    texts: 24,
    btn: 36,
  },
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  lineHeights: [1.2],
  breakpoints: ['480px', '768px', '1280px'],
  mediaQueries: {
    small: `@media screen and (min-width: 480px)`,
    medium: `@media screen and (min-width: 768px)`,
    large: `@media screen and (min-width: 1280px)`,
  },
  sizes: {
    mobile: 480,
    tablet: 768,
    desctop: 1280,
  },
  borders: {
    btn: `2px dashed #A638F5`,
  },
  radii: {
    btn: 8,
  },
  shadows: {
    btn: `0 0 2px 1px #A638F5`,
    btnHover: `0 0 8px 4px #A638F5`,
  },
};
