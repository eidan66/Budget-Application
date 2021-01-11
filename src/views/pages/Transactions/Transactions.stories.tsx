import React from 'react';
import Transactions from './';
import userData from '../../../mockup-tests/userDetails.json';

export default {
  title: 'Views/Pages/Transactions',
  component: Transactions,
};

export const StoryTransactions = (args) => <Transactions {...args} />;
StoryTransactions.args = {
  amount: '450,000 kr',
  status: 'Refunded',
  categoryColor: 'orange',
  category: 'Games',
  avatarSrc: userData.avatar,
  first_name: 'Idan',
  last_name: 'Levian',
  business: 'Amazon',
  time: '15:12',
  date: '13 Aug 2016',
  type: 'Income',
};
