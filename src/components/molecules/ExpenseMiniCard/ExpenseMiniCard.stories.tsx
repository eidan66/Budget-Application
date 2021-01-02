import React from 'react';
import ExpenseMiniCard from '.';

export default {
  title: 'components/molecules/ExpenseMiniCard',
  component: ExpenseMiniCard,
};

export const CategoryExpenseMiniCard = (args) => <ExpenseMiniCard.Category {...args} />;
CategoryExpenseMiniCard.args = {
  color: 'orange',
  category: 'Software',
};

export const NoteExpenseMiniCard = (args) => <ExpenseMiniCard.AddNote {...args} />;
NoteExpenseMiniCard.args = {
  note: 'Bought softs',
};

export const ReceiptExpenseMiniCard = (args) => <ExpenseMiniCard.Receipt {...args} />;
ReceiptExpenseMiniCard.args = {
  receipt: 'Cancelled',
};

export const AmountExpenseMiniCard = (args) => <ExpenseMiniCard.Amount {...args} />;
AmountExpenseMiniCard.args = {
  color: 'lightGreen',
  amount: '450,000 kr',
  status: 'Refunded',
};
