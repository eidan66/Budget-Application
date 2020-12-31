import React from 'react';
import { CurrentBalance } from './';

export default {
  title: 'components/molecules/CurrentBalance',
  component: CurrentBalance,
};

export const Current_Balance = (args) => <CurrentBalance {...args} />;
Current_Balance.args = {
  currentBalance: '$25,650',
};
