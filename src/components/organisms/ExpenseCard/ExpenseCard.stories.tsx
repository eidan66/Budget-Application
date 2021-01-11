import React from 'react';
import ExpenseCard from './ExpenseCard';
import pic from '../../../assets/images/avatar.jpg';

export default {
  title: 'components/organisms/ExpenseCard',
  component: ExpenseCard,
};

export const ClickedExpenseCard = (args) => <ExpenseCard {...args} />;
ClickedExpenseCard.args = {
  clickedColor: 'lightgreen',
  amountColor: 'lightGreen',
  amount: '450,000 kr',
  status: 'Refunded',
  categoryColor: 'orange',
  category: 'Software',
  avatarSrc: pic,
  first_name: 'Idan',
  last_name: 'Levian',
  business: 'Amazon',
  time: '15:12',
  date: '13 Aug 2016',
  type: 'Income',
};

export const UnClickedExpenseCard = (args) => <ExpenseCard {...args} />;
UnClickedExpenseCard.args = {
  amountColor: 'lightGreen',
  amount: '450,000 kr',
  status: 'Refunded',
  categoryColor: 'orange',
  category: 'Software',
  avatarSrc: pic,
  first_name: 'Idan',
  last_name: 'Levian',
  business: 'Amazon',
  time: '15:12',
  date: '13 Aug 2016',
  type: 'Income',
};
