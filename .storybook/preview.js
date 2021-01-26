import React from 'react';
import GlobalStyle from '../src/style/global';
import { ThemeProvider } from '@material-ui/core';
import theme from '../src/style/theme/theme';
import GlobalStore from '../src/contexts/GlobalStore';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStore>
        <GlobalStyle />
        <Story />
      </GlobalStore>
    </ThemeProvider>
  ),
];
