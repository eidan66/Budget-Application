/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useContext, useState } from 'react';
import DATABASE from './mockup-tests/Payment_History.json';
import { compareFunction, categoriesCollector } from './helpers';
import { AppContext } from './contexts/app/appContext';
import { CategoriesContext } from './contexts/categories/categoriesContext';
import { Loader } from './components/atoms';

const App = () => {
  const [state, setState] = useState([{}]);
  const { sorted, categoriesFlag, setSorted, setCategoriesFlag } = useContext(AppContext);
  const { categories, addCategory } = useContext(CategoriesContext);

  useEffect(() => {
    setTimeout(() => {
      const sortedDB = DATABASE.sort(compareFunction);
      setState(sortedDB);
    }, 5000);
  }, []);

  useEffect(() => {
    state.length > 1 ? (setSorted(true), console.info('Done sorting.')) : console.info('Not sorted yet.');
  }, [state]);

  useEffect(() => {
    sorted ? categoriesCollector(DATABASE, addCategory, setCategoriesFlag) : console.log('Not Category collected yet ');
  }, [sorted]);

  useEffect(() => {
    sorted ? console.info('Done collect categories') : console.log('NOT COLLECTED CATEGORIES YET');
  }, [categoriesFlag]);

  return <div>{sorted && categoriesFlag ? 'App' : <Loader.Spinner />}</div>;
};

export default App;
