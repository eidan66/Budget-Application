import React, { FC, ReactNode } from 'react';
import { CategoriesContextProvider } from './categories/categoriesProvider';
import { AppContextProvide } from './app/appProvider';
import { UserContextProvide } from './user/userProvider';
import { PaymentContextProvide } from './payment/paymentProvider';
import { LoaderContextProvider } from './loader/loaderProvider';

export interface IGlobalStore {
  children: ReactNode;
}

const GlobalStore: FC<IGlobalStore> = ({ children }) => {
  return (
    <AppContextProvide>
      <PaymentContextProvide>
        <UserContextProvide>
          <LoaderContextProvider>
            <CategoriesContextProvider>{children}</CategoriesContextProvider>
          </LoaderContextProvider>
        </UserContextProvide>
      </PaymentContextProvide>
    </AppContextProvide>
  );
};

export default GlobalStore;
