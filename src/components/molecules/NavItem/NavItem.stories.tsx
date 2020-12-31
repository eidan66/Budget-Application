import React from 'react';
import { NavItem } from './';

export default {
  title: 'components/molecules/NavItem',
  component: NavItem,
};

export const Dashboard = (args) => <NavItem.Dashboard {...args} />;
Dashboard.args = {
  variant: 'subtitle1',
};
export const Charts = (args) => <NavItem.Charts {...args} />;
Charts.args = {
  variant: 'subtitle2',
};
export const Cards = (args) => <NavItem.Cards {...args} />;
Cards.args = {
  variant: 'subtitle2',
};
export const Calendar = (args) => <NavItem.Calendar {...args} />;
Calendar.args = {
  variant: 'subtitle2',
};
export const Messages = (args) => <NavItem.Messages {...args} />;
Messages.args = {
  variant: 'subtitle2',
};
export const User = (args) => <NavItem.User {...args} />;
User.args = {
  variant: 'subtitle2',
};
export const Settings = (args) => <NavItem.Settings {...args} />;
Settings.args = {
  variant: 'subtitle2',
};
