import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import AtomIcon from './';
import * as I from '../../../models/icon/icon';
import * as E from '../../../containers/enums/icon';
export default {
  title: 'Typography',
  component: AtomIcon,
} as Meta;

const Template: Story<I.Icon> = (args) => <AtomIcon {...args} />;

export const Canceled = Template.bind({});
Canceled.args = {
  icon: E.icon.CANCELED,
  color: 'red',
  fontSize: E.fontSize.LARGE,
};

export const Paypal = Template.bind({});
Paypal.args = {
  icon: E.icon.PAYPAL,
  color: 'gray',
  fontSize: E.fontSize.LARGE,
};

export const Income = Template.bind({});
Income.args = {
  icon: E.icon.INCOME,
  color: 'blue',
  fontSize: E.fontSize.LARGE,
};

export const Dashboard = Template.bind({});
Dashboard.args = {
  icon: E.icon.DASHBOARD,
  color: 'gray',
  fontSize: E.fontSize.LARGE,
};

export const Chart = Template.bind({});
Chart.args = {
  icon: E.icon.CHART,
  color: 'gray',
  fontSize: E.fontSize.LARGE,
};

export const Card = Template.bind({});
Card.args = {
  icon: E.icon.CARD,
  color: 'gray',
  fontSize: E.fontSize.LARGE,
};

export const Calendar = Template.bind({});
Calendar.args = {
  icon: E.icon.CALENDAR,
  color: 'gray',
  fontSize: E.fontSize.LARGE,
};

export const Messages = Template.bind({});
Messages.args = {
  icon: E.icon.MESSAGES,
  color: 'gray',
  fontSize: E.fontSize.LARGE,
};

export const User = Template.bind({});
User.args = {
  icon: E.icon.USER,
  color: 'gray',
  fontSize: E.fontSize.LARGE,
};

export const Setting = Template.bind({});
Setting.args = {
  icon: E.icon.SETTING,
  color: 'gray',
  fontSize: E.fontSize.LARGE,
};
