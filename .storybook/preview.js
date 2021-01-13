import React from 'react';
import GlobalStyle from '../src/style/global';
import { ThemeProvider } from '@material-ui/core';
import theme from '../src/style/theme/theme';
import { StoreProvider } from '../src/contexts/budgetContext';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <GlobalStyle />
        <Story />
      </StoreProvider>
    </ThemeProvider>
  ),
];
