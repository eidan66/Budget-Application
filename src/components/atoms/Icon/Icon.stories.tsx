import * as React from 'react';
import { Icon } from './';

export default {
  title: 'components/atoms/Icon',
  component: Icon,
};

export const CancelledIcon = (args) => <Icon.Cancelled {...args} />;
export const PaypalIcon = (args) => <Icon.Paypal {...args} />;
export const IncomeIcon = (args) => <Icon.Income {...args} />;
export const DashboardIcon = (args) => <Icon.Dashboard {...args} />;
export const ChartsIcon = (args) => <Icon.Charts {...args} />;
export const CardsIcon = (args) => <Icon.Cards {...args} />;
export const CalendarIcon = (args) => <Icon.Calendar {...args} />;
export const MessagesIcon = (args) => <Icon.Messages {...args} />;
export const UserIcon = (args) => <Icon.User {...args} />;
export const SettingsIcon = (args) => <Icon.Settings {...args} />;
