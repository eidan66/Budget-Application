/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useContext, useState } from 'react';
import * as S from './style';
import DATABASE from './mockup-tests/Payment_History.json';

//  ************* Backdrop *************   \\
import { Backdrop } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//  ************* Backdrop *************   \\

import USER_DETAILS from './mockup-tests/userDetails.json';
import { compareFunction, categoriesCollector } from './helpers';

//  ************* CONTEXT *************   \\
import { UserContext } from './contexts/user/userContext';
import { AppContext } from './contexts/app/appContext';
import { PaymentContext } from './contexts/payment/paymentContext';
import { CategoriesContext } from './contexts/categories/categoriesContext';
//  ************* CONTEXT *************   \\

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
