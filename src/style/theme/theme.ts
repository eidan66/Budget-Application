import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
  typography: {
    subtitle1: {
      lineHeight: 'normal',
      color: 'white',
    },
    subtitle2: {
      color: '#C5C0E5',
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
      // fontWeight: 'bold',
    },
    button: {
      color: '#c4c0e5',
    },
  },
});

export default defaultTheme;
