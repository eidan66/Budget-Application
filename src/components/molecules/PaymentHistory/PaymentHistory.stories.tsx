import React from 'react';
import { PaymentHistory } from './';

export default {
  title: 'components/molecules/PaymentHistory',
  component: PaymentHistory,
};

export const Cancelled = (args) => <PaymentHistory.Cancelled {...args} />;
Cancelled.args = {
  paymentDetail: 'Cancelled',
  paymentDate: '3 march, 12:12',
  paymentNumber: '0',
  paymentCurrency: 'usd',
};

export const Paypal = (args) => <PaymentHistory.Paypal {...args} />;
Paypal.args = {
  paymentDetail: 'Deposit Paypal',
  paymentDate: '4 march, 14:30',
  paymentNumber: '+ 2,220',
  paymentCurrency: 'usd',
};

export const Income = (args) => <PaymentHistory.Income {...args} />;
Income.args = {
  paymentDetail: 'Income',
  paymentDate: '6 march, 18:21',
  paymentNumber: '+ 4,300',
  paymentCurrency: 'usd',
};
