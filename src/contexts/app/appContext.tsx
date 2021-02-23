/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';
import { IApp } from './../../interfaces/context';

export const initialState = {
  themesMode: 'light',
  currency: '',
  sorted: false,
  categoriesFlag: false,
  setThemesMode: () => {},
  setCurrency: () => {},
  setSorted: () => {},
  setCategoriesFlag: () => {},
};

export const AppContext = createContext<IApp>(initialState);
