import React from 'react';
import UserPayment from './';
import pic from '../../../assets/images/avatar.jpg';

export default {
  title: 'components/organisms/UserPayment',
  component: UserPayment,
};

export const StoryPaymentHistory = (args) => <UserPayment {...args} />;
StoryPaymentHistory.args = {
  first_name: 'Idan',
  last_name: 'Levian',
  email: 'eidan47@gmail.com',
  avatar: pic,
};
