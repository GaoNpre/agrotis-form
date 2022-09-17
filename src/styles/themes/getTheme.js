import {
  common,
  grey,
  teal,
} from '@material-ui/core/colors';

export const getTheme = (mode) => ({
  palette: {
    // White Mode
    ...(mode === 'light' && {
      primary: teal['700'],
      secundary: common.white,
      text: {
        primary: grey['600'],
        secondary: common.white,
      },
      pageBackground: grey['200'],
      buttonHover: teal['A700'],
    }),

    // Dark Mode
    ...(mode === 'dark' && {
      background: common.black,
    }),
  },
});
