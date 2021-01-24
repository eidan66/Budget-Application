import React, { FC, ReactNode } from 'react';
import { CategoriesContextProvider } from './categories/categoriesProvider';
import { AppContextProvide } from './app/appProvider';
import { UserContextProvide } from './user/userProvider';
import { PaymentContextProvide } from './payment/paymentProvider';

export interface IGlobalStore {
  children: ReactNode;
}

const GlobalStore: FC<IGlobalStore> = ({ children }) => {
  return (
    <AppContextProvide>
      <PaymentContextProvide>
        <UserContextProvide>
          <CategoriesContextProvider>{children}</CategoriesContextProvider>
        </UserContextProvide>
      </PaymentContextProvide>
    </AppContextProvide>
  );
};

export default GlobalStore;
