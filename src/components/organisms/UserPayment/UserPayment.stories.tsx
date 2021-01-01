import React from 'react';
import UserPayment from './';
import pic from '../../../assets/images/avatar.jpg';

export default {
  title: 'components/organisms/UserPayment',
  component: UserPayment,
};

export const UserPaymentDetails = (args) => <UserPayment {...args} />;
UserPaymentDetails.args = {
  userName: 'Idan Levian',
  userEmail: 'eidan47@gmail.com',
  src: pic,
  paymentDetail: 'Deposit Paypal',
  paymentDate: '4 march, 14:30',
  paymentNumber: '+ 2,220',
  paymentCurrency: 'usd',
};
