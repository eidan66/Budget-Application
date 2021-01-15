/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react';
import Categories from './views/pages/Categories/index';
// import smallDB from './mockup-tests/smallmockup.json';
// import { compareFunction } from './helpers';
// import { StoreProvider } from './contexts/tryContext';

// import ComponentTest from './ComponentTest';
import { CategoriesContextProvider } from './contexts/categoriesContext';
// import { UserContextProvider } from './contexts/testComponent';

const App = () => {
  // const [state, setState] = useState([{}]);

  // useEffect(() => {
  //   const sortedDB = smallDB.sort(compareFunction);
  //   setState(sortedDB);
  // }, []);

  // useEffect(() => {
  //   console.table(state);
  // }, [state]);

  return (
    <CategoriesContextProvider>
      <Categories />
    </CategoriesContextProvider>
  );
};

export default App;
