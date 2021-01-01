import React from 'react';
import ExpensesDetails from '.';
import pic from '../../../assets/images/avatar.jpg';

export default {
  title: 'components/molecules/ExpensesDetails',
  component: ExpensesDetails,
};

export const UserExpensesDetails = (args) => <ExpensesDetails {...args} />;
UserExpensesDetails.args = {
  avatarSrc: pic,
  name: 'Idan Levian',
  business: 'Amazon',
  time: '15:12',
  date: '13 Aug 2016',
};
