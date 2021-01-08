import React from 'react';
import Summary from './';

export default {
  title: 'components/molecules/Summary',
  component: Summary,
};

export const IncomeSummary = (args) => <Summary {...args} />;
IncomeSummary.args = {
  icon: 'Income',
  revenueTitle: 'Revenue',
  percent: '+5.08%',
  revenue: '$90,524',
  summary: 'Income',
};
export const ExpenseSummary = (args) => <Summary {...args} />;
ExpenseSummary.args = {
  icon: 'Expense',
  revenueTitle: 'Outgoings',
  percent: '-3.14%',
  revenue: '$60,228',
  summary: 'Expense',
};
