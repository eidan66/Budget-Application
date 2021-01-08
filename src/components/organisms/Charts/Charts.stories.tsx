import React from 'react';
import { Charts } from '.';

export default {
  title: 'components/organisms/Charts',
  component: Charts,
};

export const IncomeChart = (args) => <Charts.Income {...args} />;
export const ActivityChart = (args) => <Charts.Activity {...args} />;
