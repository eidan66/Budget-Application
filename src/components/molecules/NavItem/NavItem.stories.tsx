import React from 'react';
import { NavItem } from './';

export default {
  title: 'components/molecules/NavItem',
  component: NavItem,
};

export const Dashboard = (args) => <NavItem {...args} />;
Dashboard.args = {
  current: false,
  label: 'Dashboard',
  icon: 'Dashboard',
};

export const DashboardCurrent = (args) => <NavItem {...args} />;
DashboardCurrent.args = {
  current: true,
  label: 'Dashboard',
  icon: 'Dashboard',
};
