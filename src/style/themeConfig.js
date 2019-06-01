import { theme } from './theme';

// export default themeConfig => {
const cssString = `
    :root {
      --color-black1: ${theme.color.black1};
      --color-darkGrey: ${theme.color.darkGrey};
      --color-slateGrey: ${theme.color.slateGrey};
      --color-purpleishBlue: ${theme.color.purpleishBlue};
      --color-paleGrey: ${theme.color.paleGrey};
      --color-paleBlue: ${theme.color.paleBlue};
      --color-blueyGrey: ${theme.color.blueyGrey};
      --color-paleLavender: ${theme.color.paleLavender};
      --color-mediumGreen: ${theme.color.mediumGreen};
      --color-red: ${theme.color.red};
      --color-lightBlueGrey: ${theme.color.lightBlueGrey};
    }
  `;

const styleNode = document.createElement('style');
styleNode.innerHTML = cssString;
document.head.appendChild(styleNode);
// };
