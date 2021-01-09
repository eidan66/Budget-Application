import React from 'react';
import Summary from './';

export default {
  title: 'components/molecules/Summary',
  component: Summary,
};

export const IncomeSummary = (args) => <Summary {...args} />;
IncomeSummary.args = {
  summary: 'Income',
  percent: '+5.08%',
  revenue: '$90,524',
};

export const ExpenseSummary = (args) => <Summary {...args} />;
ExpenseSummary.args = {
  summary: 'Expense',
  percent: '-3.14%',
  revenue: '$60,228',
};
