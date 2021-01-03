import React from 'react';
import UserPayment from './';
import pic from '../../../assets/images/avatar.jpg';

export default {
  title: 'components/organisms/UserPayment',
  component: UserPayment,
};

export const UserPaymentDetails = (args) => <UserPayment {...args} />;
UserPaymentDetails.args = {
  first_name: 'Idan',
  last_name: 'Levian',
  email: 'eidan47@gmail.com',
  avatar: pic,
  paymentDetail: 'Deposit Paypal',
  paymentDate: '4 march, 14:30',
  paymentNumber: '+ 2,220',
  paymentCurrency: 'usd',
};
