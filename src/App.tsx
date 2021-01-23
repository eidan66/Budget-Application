/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useContext, useState } from 'react';
import DATABASE from './mockup-tests/Payment_History.json';
import USER_DETAILS from './mockup-tests/userDetails.json';
import { compareFunction, categoriesCollector } from './helpers';
import { UserContext } from './contexts/user/userContext';
import { AppContext } from './contexts/app/appContext';
import { CategoriesContext } from './contexts/categories/categoriesContext';
import { Loader } from './components/atoms';

const App = () => {
  const [state, setState] = useState([{}]);
  const [userFlag, setUserFlag] = useState(false);
  const { sorted, categoriesFlag, setSorted, setCategoriesFlag } = useContext(AppContext);
  const { categories, addCategory } = useContext(CategoriesContext);
  const { userDetails, setUserDetails } = useContext(UserContext);

  useEffect(() => {
    userFlag === false ? (setUserDetails(USER_DETAILS), setUserFlag(true)) : console.error('Waiting for user...');

    setTimeout(() => {
      const sortedDB = DATABASE.sort(compareFunction);
      setState(sortedDB);
    }, 5000);
  }, []);

  useEffect(() => {
    state.length > 1 ? setSorted(true) : '';
  }, [state]);

  useEffect(() => {
    sorted ? categoriesCollector(DATABASE, addCategory, setCategoriesFlag) : '';
  }, [sorted]);

  // useEffect(() => {
  //   userFlag ? console.info('Done add user details.') : console.log('No user added yet ');
  // }, [userDetails, userFlag]);

  // useEffect(() => {
  //   sorted ? console.info('Done collect categories') : console.log('NOT COLLECTED CATEGORIES YET');
  // }, [categoriesFlag]);

  useEffect(() => {
    sorted && userFlag && categoriesFlag
      ? console.info('Successfully received the data !')
      : console.log('Waiting for the required data ...');
  }, [categoriesFlag, userFlag, sorted]);

  return <div>{sorted && categoriesFlag ? 'App' : <Loader.Spinner />}</div>;
};

export default App;
