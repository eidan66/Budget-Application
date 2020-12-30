import React from 'react';
import GlobalStyle from '../src/style/global';
import { ThemeProvider } from '@material-ui/core';
import theme from '../src/style/theme/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
