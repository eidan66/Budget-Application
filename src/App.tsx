/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useContext, useState } from 'react';
import DATABASE from './mockup-tests/Payment_History.json';
import USER_DETAILS from './mockup-tests/userDetails.json';
import { compareFunction, categoriesCollector } from './helpers';
import { UserContext } from './contexts/user/userContext';
import { AppContext } from './contexts/app/appContext';
import { PaymentContext } from './contexts/payment/paymentContext';
import { CategoriesContext } from './contexts/categories/categoriesContext';
import { Loader } from './components/atoms';

const App: React.FC = () => {
  const [userFlag, setUserFlag] = useState(false);
  const { sorted, categoriesFlag, setSorted, setCategoriesFlag } = useContext(AppContext);
  const { paymentDetails, setPaymentDetails } = useContext(PaymentContext);
  const { addCategory } = useContext(CategoriesContext);
  const { setUserDetails } = useContext(UserContext);

  useEffect(() => {
    userFlag === false ? (setUserDetails(USER_DETAILS), setUserFlag(true)) : console.error('Waiting for user...');

    setTimeout(() => {
      const sortedDB = DATABASE.sort(compareFunction);
      setPaymentDetails(sortedDB);
    }, 5000);
  }, []);

  useEffect(() => {
    paymentDetails.length >= 1 ? setSorted(true) : '';
  }, [paymentDetails]);

  useEffect(() => {
    sorted ? categoriesCollector(DATABASE, addCategory, setCategoriesFlag) : '';
  }, [sorted]);

  useEffect(() => {
    sorted && userFlag && categoriesFlag
      ? console.info('Successfully received the data !')
      : console.info('Waiting for the required data ...');
  }, [categoriesFlag, userFlag, sorted]);

  return <div>{sorted && categoriesFlag ? 'App' : <Loader.Spinner />}</div>;
};

export default App;
