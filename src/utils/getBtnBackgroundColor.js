export function getBtnBackgroundColor({ children, theme }) {
  const {
    colors: {
      btn: { backgroundGood, backgroundNeutral, backgroundBad },
    },
  } = theme;
  switch (children) {
    case 'good':
      return backgroundGood;
    case 'neutral':
      return backgroundNeutral;
    case 'bad':
      return backgroundBad;
    default:
      return '#EEBDFF';
  }
}
