/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { StoreProvider } from './contexts/budgetContext';
import ContextTest from './contextTest';
import Categories from './views/pages/Categories/index';

const App = () => {
  return (
    <StoreProvider>
      <ContextTest />
      {/* <Categories /> */}
    </StoreProvider>
  );
};

export default App;
