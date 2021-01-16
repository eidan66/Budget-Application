import React, { FC, ReactNode } from 'react';
import { CategoriesContextProvider } from './categories/categoriesProvider';

export interface IGlobalStore {
  children: ReactNode;
}

const GlobalStore: FC<IGlobalStore> = ({ children }) => {
  return <CategoriesContextProvider>{children}</CategoriesContextProvider>;
};

export default GlobalStore;
