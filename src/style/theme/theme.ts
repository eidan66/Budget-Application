import { createMuiTheme } from '@material-ui/core/styles';

export const theme = {
  primaryDark: '#0D0C1D',
  primaryLight: '#EFFFFA',
  primaryHover: '#343078',
  mobile: '576px',
};

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#4cc1ef',
    },
    error: {
      main: '#ff000075',
    },
    text: {
      primary: '#808080 ',
      secondary: '#4cc1ef',
    },
  },
  typography: {
    subtitle1: {
      lineHeight: 'normal',
      color: 'white',
    },
    subtitle2: {
      color: '#959095',
    },
    body2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontWeight: 'bold',
    },
    h6: {
      color: 'white',
      fontWeight: 'bold',
      letterSpacing: '0.25em',
    },
    h5: {
      color: 'white',
      fontSize: '1.3rem',
      fontWeight: 600,
    },
  },
});

export default defaultTheme;
