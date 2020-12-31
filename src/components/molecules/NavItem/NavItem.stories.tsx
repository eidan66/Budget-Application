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

/*  import React, { FC } from 'react';
import { Icon, Typography } from '../../atoms';

interface IPaymentHistory {
  paymentDetail?: string;
  paymentDate?: string;
  paymentNumber?: string;
  paymentCurrency?: string;
}

interface IPaymentHistoryProps {
  [property: string]: FC<IPaymentHistory>;
}

const PaymentHistory: IPaymentHistoryProps = {
  CancelPayment: ({ paymentDetail, paymentDate, paymentNumber, paymentCurrency }) => (
    <div>
      <Icon.Cancelled />
      <Typography.ExtraSmall>{paymentDetail}</Typography.ExtraSmall>
      <Typography.Small variant="subtitle2">{paymentDate}</Typography.Small>
      <Typography.Subtitle>{paymentNumber}</Typography.Subtitle>
      <Typography.UppercaseText>{paymentCurrency}</Typography.UppercaseText>
    </div>
  ),
};

export default PaymentHistory;
*/
