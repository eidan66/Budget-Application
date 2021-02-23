/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';
import { ICategories } from '../../interfaces/context';

export const initialState = {
  categories: [],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  addCategory: () => {},
};

export const CategoriesContext = createContext<ICategories>(initialState);
