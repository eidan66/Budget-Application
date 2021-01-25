import React, { FC, ReactNode } from 'react';
import { CategoriesContextProvider } from './categories/categoriesProvider';
import { AppContextProvide } from './app/appProvider';
import { UserContextProvide } from './user/userProvider';
import { PaymentContextProvide } from './payment/paymentProvider';
import { LoaderContextProvider } from './loader/loaderProvider';
import { FavoritesContextProvider } from './favorites/favoritesProvider';

export interface IGlobalStore {
  children: ReactNode;
}

const GlobalStore: FC<IGlobalStore> = ({ children }) => {
  return (
    <AppContextProvide>
      <PaymentContextProvide>
        <UserContextProvide>
          <LoaderContextProvider>
            <FavoritesContextProvider>
              <CategoriesContextProvider>{children}</CategoriesContextProvider>
            </FavoritesContextProvider>
          </LoaderContextProvider>
        </UserContextProvide>
      </PaymentContextProvide>
    </AppContextProvide>
  );
};

export default GlobalStore;
