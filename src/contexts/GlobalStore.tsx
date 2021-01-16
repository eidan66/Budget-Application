import React, { FC, ReactNode } from 'react';
import { CategoriesContextProvider } from './categories/categoriesProvider';
import { AppContextProvide } from './app/appProvider';

export interface IGlobalStore {
  children: ReactNode;
}

const GlobalStore: FC<IGlobalStore> = ({ children }) => {
  return (
    <AppContextProvide>
      <CategoriesContextProvider>{children}</CategoriesContextProvider>
    </AppContextProvide>
  );
};

export default GlobalStore;
