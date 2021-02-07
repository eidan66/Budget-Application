/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useContext, useState } from 'react';
import * as S from './style';

import urls from './config/urls';
import { currencyAPI, transactionAPI } from './services/axiosService';


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
  const { currency, setCategoriesFlag, setCurrency } = useContext(AppContext);
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

  const getTransactionList = async () => {
    const url = urls.transaction.transactionsList();
    try {
      const { data } = await transactionAPI.get(url);
      const sortedDB = data.sort(compareFunction);
      setUserDetails(USER_DETAILS);
      setUserFlag(true);
      setPaymentDetails(sortedDB);
      categoriesCollector(sortedDB, addCategory, setCategoriesFlag);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    getTransactionList();
  }, []);


  useEffect(() => {
    userFlag && setCurrency(userDetails[0].current_balance_currency);
  }, [userFlag]);

  useEffect(() => {
    getCurrencyList();
  }, [currency]);

  return (
    <S.AppWrapper>
      {paymentDetails.length === 0 ? (
        <Backdrop className={classes.backdrop} open={true}>
          <Loader.Spinner />
        </Backdrop>
      ) : (
        <Homepage />
      )}
    </S.AppWrapper>
  );
};

export default App;
