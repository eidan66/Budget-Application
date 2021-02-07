/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useContext, useState } from 'react';
import * as S from './style';
import DATABASE from './mockup-tests/Payment_History.json';

import urls from './config/urls';
import { currencyAPI } from './services/axiosService';

//  ************* Backdrop *************   \\
import { Backdrop } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//  ************* Backdrop *************   \\

import USER_DETAILS from './services/userDetails.json';
import { compareFunction, categoriesCollector } from './helpers';

//  ************* CONTEXT *************   \\
import { UserContext } from './contexts/user/userContext';
import { AppContext } from './contexts/app/appContext';
import { PaymentContext } from './contexts/payment/paymentContext';
import { CategoriesContext } from './contexts/categories/categoriesContext';
//  ************* CONTEXT *************   \\

import useLocalStorage from './hooks/useLocalStorage';

import { Loader } from './components/atoms';

import Homepage from './views/pages/Homepage/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  const [userFlag, setUserFlag] = useState(false);
  const { sorted, categoriesFlag, currency, setSorted, setCategoriesFlag, setCurrency } = useContext(AppContext);
  const { paymentDetails, setPaymentDetails } = useContext(PaymentContext);
  const { addCategory } = useContext(CategoriesContext);
  const { userDetails, setUserDetails } = useContext(UserContext);

  const [currencyList, setCurrencyList] = useLocalStorage('currencyList', []);

  const getCurrencyList = async () => {
    const url = urls.currency.currencyList(currency);
    try {
      const { data } = await currencyAPI.get(url);
      setCurrencyList(data.rates);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  /* Object.keys(myObject).map((item,index)=>{
console.log(myObject[item]);
}) */

  useEffect(() => {
    setTimeout(() => {
      userFlag === false ? (setUserDetails(USER_DETAILS), setUserFlag(true)) : console.info('Waiting for user...');
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
      ? (console.info('Successfully received the data !'), setCurrency(userDetails[0].current_balance_currency))
      : console.info('Waiting for the required data ...');
  }, [categoriesFlag, userFlag, sorted]);

  useEffect(() => {
    getCurrencyList();
    console.log('here');
  }, [currency]);

  return (
    <S.AppWrapper>
      {sorted && categoriesFlag ? (
        <Homepage />
      ) : (
        <Backdrop className={classes.backdrop} open={true}>
          <Loader.Spinner />
        </Backdrop>
      )}
    </S.AppWrapper>
  );
};

export default App;
