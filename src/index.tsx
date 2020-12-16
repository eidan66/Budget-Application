import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { themeConfig } from './style/theme/liteTheme';

ReactDOM.render(
  <ThemeProvider theme={themeConfig}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
