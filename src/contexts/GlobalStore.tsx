import React, { FC, ReactNode } from 'react';
import { CategoriesContextProvider } from './categories/categoriesProvider';
import { AppContextProvide } from './app/appProvider';
import { UserContextProvide } from './user/userProvider';

export interface IGlobalStore {
  children: ReactNode;
}

const GlobalStore: FC<IGlobalStore> = ({ children }) => {
  return (
    <AppContextProvide>
      <UserContextProvide>
        <CategoriesContextProvider>{children}</CategoriesContextProvider>
      </UserContextProvide>
    </AppContextProvide>
  );
};

export default GlobalStore;
