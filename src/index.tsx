import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style/global';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import defaultTheme from './style/theme/theme';

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
