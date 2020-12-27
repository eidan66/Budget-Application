import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Icon from './';
import { icon, fontSize } from '../../../models/icon';

export default {
  title: 'component/atom/Icon',
  component: Icon,
} as Meta;

export const Canceled = (args) => <Icon {...args} />;
Canceled.args = {
  icon: icon.CANCELED,
  color: 'red',
  fontSize: fontSize.LARGE,
};

export const Paypal = (args) => <Icon {...args} />;
Paypal.args = {
  icon: icon.PAYPAL,
  color: 'gray',
  fontSize: fontSize.LARGE,
};

export const Income = (args) => <Icon {...args} />;
Income.args = {
  icon: icon.INCOME,
  color: 'blue',
  fontSize: fontSize.LARGE,
};

export const Dashboard = (args) => <Icon {...args} />;
Dashboard.args = {
  icon: icon.DASHBOARD,
  color: 'gray',
  fontSize: fontSize.LARGE,
};

export const Chart = (args) => <Icon {...args} />;
Chart.args = {
  icon: icon.CHART,
  color: 'gray',
  fontSize: fontSize.LARGE,
};

export const Card = (args) => <Icon {...args} />;
Card.args = {
  icon: icon.CARD,
  color: 'gray',
  fontSize: fontSize.LARGE,
};

export const Calendar = (args) => <Icon {...args} />;
Calendar.args = {
  icon: icon.CALENDAR,
  color: 'gray',
  fontSize: fontSize.LARGE,
};

export const Messages = (args) => <Icon {...args} />;
Messages.args = {
  icon: icon.MESSAGES,
  color: 'gray',
  fontSize: fontSize.LARGE,
};

export const User = (args) => <Icon {...args} />;
User.args = {
  icon: icon.USER,
  color: 'gray',
  fontSize: fontSize.LARGE,
};

export const Setting = (args) => <Icon {...args} />;
Setting.args = {
  icon: icon.SETTING,
  color: 'gray',
  fontSize: fontSize.LARGE,
};
