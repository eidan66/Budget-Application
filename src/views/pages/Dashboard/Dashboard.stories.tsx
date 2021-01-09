import React from 'react';
import Dashboard from './';
import userData from '../../../mockup-tests/userDetails.json';
import {} from '../../../helpers';
export default {
  title: 'Views/Pages/Dashboard',
  component: Dashboard,
};

export const StoryDashboard = (args) => <Dashboard {...args} />;
StoryDashboard.args = {
  first_name: userData.first_name,
  last_name: userData.last_name,
  exp_year: userData.credit_card.exp_year,
  exp_month: userData.credit_card.exp_month,
  last4Digits: userData.credit_card.last4Digits,
  incomePercent: '+5.08%',
  incomeRevenue: '$90,524',
  expensePercent: '-3.14%',
  expenseRevenue: '$60,228',
  email: userData.email,
  avatar: userData.avatar,
};
