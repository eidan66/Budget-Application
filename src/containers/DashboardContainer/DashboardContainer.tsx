/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Dashboard } from '../../views/pages';
import { getLastNMonths, percentDiff } from '../../helpers';

import { PaymentContext } from '../../contexts/payment/paymentContext';
import { UserContext } from '../../contexts/user/userContext';
import { AppContext } from '../../contexts/app/appContext';

import useLocalStorage from '../../hooks/useLocalStorage';
import { IPaymentDetails } from '../../interfaces/context';
const DashboardContainer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currencyList, setCurrencyList] = useLocalStorage('currencyList', []);

  const { paymentDetails } = React.useContext(PaymentContext);
  const { userDetails } = React.useContext(UserContext);
  const { currency } = React.useContext(AppContext);

  const currencyChecker = (paymentCurrency: string, paymentAmount: string) => {
    let rate = 1;
    Object.keys(currencyList).map((item) => {
      if (item === paymentCurrency) {
        rate = currencyList[item] * parseInt(paymentAmount);
      }
    });

    return rate.toFixed(0);
  };
  const revenue = (paymentDetails: IPaymentDetails[], revenueType: string, calcBeforeLast3?: boolean) => {
    let lastMonths: number[];
    calcBeforeLast3 ? (lastMonths = getLastNMonths(6).slice(0, 3)) : (lastMonths = getLastNMonths(3));

    let totalRevenue = 0;
    paymentDetails.map((payment: { paymentType: string; date: string; amount: string }) => {
      if (payment.paymentType === revenueType) {
        lastMonths.map((month) => {
          const afterSlice: string[] = payment.date.slice(0, 2).split('/');
          const afterParse: number = parseInt(afterSlice[0]);
          month === afterParse ? (totalRevenue += parseInt(currencyChecker(currency, payment.amount))) : '';
        });
      }
    });
    return totalRevenue;
  };
  const revenueIncome = revenue(paymentDetails, 'Income');
  const revenueExpenses = revenue(paymentDetails, 'Expenses');

  const percent = (revenueType: string) => {
    const rev = revenue(paymentDetails, revenueType, true);

    const percent = revenueType === 'Income' ? percentDiff(revenueIncome, rev) : percentDiff(revenueExpenses, rev);
    return percent.toFixed(2);
  };

  percent('Income');
  return (
    <Dashboard
      last4Digits={userDetails[0].credit_card.last4Digits}
      first_name={userDetails[0].first_name}
      last_name={userDetails[0].last_name}
      exp_year={userDetails[0].credit_card.exp_year}
      exp_month={userDetails[0].credit_card.exp_month}
      incomeRevenue={revenueIncome}
      incomePercent={percent('Income')}
      expenseRevenue={revenueExpenses}
      expensePercent={percent('Expenses')}
    />
  );
};

export default DashboardContainer;
