export function getStatBackgroundColor({ children, theme }) {
  const {
    colors: {
      btn: { backgroundGood, backgroundNeutral, backgroundBad },
    },
  } = theme;

  switch (getCondition(children)) {
    case 'Good:':
      return backgroundGood;
    case 'Neutral:':
      return backgroundNeutral;
    case 'Bad:':
      return backgroundBad;
    default:
      return '#EEBDFF';
  }
}

function getCondition(children) {
  const {
    props: { children: uneditedCondition },
  } = children[1];

  return uneditedCondition[0].trim();
}
