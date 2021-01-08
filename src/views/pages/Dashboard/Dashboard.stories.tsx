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
  currentBalance: userData.current_balance,
  userCurrency: userData.current_balance_currency,
};
