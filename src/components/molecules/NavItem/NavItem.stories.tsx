import React from 'react';
import { NavItem } from './';

export default {
  title: 'components/molecules/NavItem',
  component: NavItem,
};

export const Dashboard = (args) => <NavItem.Dashboard {...args} />;
export const Charts = (args) => <NavItem.Charts {...args} />;
export const Cards = (args) => <NavItem.Cards {...args} />;
export const Calendar = (args) => <NavItem.Calendar {...args} />;
export const Messages = (args) => <NavItem.Messages {...args} />;
export const User = (args) => <NavItem.User {...args} />;
export const Settings = (args) => <NavItem.Settings {...args} />;
