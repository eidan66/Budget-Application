/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';
import { ICategories } from '../../interfaces/context';

export const initialState = {
  categories: [],
  addCategory: () => {},
};

export const CategoriesContext = createContext<ICategories>(initialState);
