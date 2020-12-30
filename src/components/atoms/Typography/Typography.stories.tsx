import * as React from 'react';
import { Typography } from './';

export default {
  title: 'component/atom/Typography',
  component: Typography,
};
//LEFT Side Nav Bar Typography
export const SelectedNavBar = (args) => <Typography.SelectedNavBar {...args} />;
SelectedNavBar.args = {
  children: 'Dashboard',
};

export const UnSelectedNavBar = (args) => <Typography.UnSelectedNavBar {...args} />;
UnSelectedNavBar.args = {
  children: 'Charts',
};
// Card details Typography

export const CurrentBalanceNumber = (args) => <Typography.CurrentBalanceNumber {...args} />;
CurrentBalanceNumber.args = {
  children: '$25,650',
};

export const CurrentBalance = (args) => <Typography.CurrentBalance {...args} />;
CurrentBalance.args = {
  children: 'Current Balance',
};

export const CardTitle = (args) => <Typography.CardTitle {...args} />;
CardTitle.args = {
  children: 'Card',
};

export const CardNumber = (args) => <Typography.CardNumber {...args} />;
CardNumber.args = {
  children: '**** **** **** 6857',
};

export const CardHolderTitle = (args) => <Typography.CardHolderTitle {...args} />;
CardHolderTitle.args = {
  children: 'Card Holder',
};

export const CardHolderName = (args) => <Typography.CardHolderName {...args} />;
CardHolderName.args = {
  children: 'Ian Kelley',
};

export const CardValidThruTitle = (args) => <Typography.CardValidThruTitle {...args} />;
CardValidThruTitle.args = {
  children: 'Valid Thro',
};

export const CardValidDateNumber = (args) => <Typography.CardValidDateNumber {...args} />;
CardValidDateNumber.args = {
  children: '04 / 21',
};

// RIGHT Side Bar Typography

export const UserFullName = (args) => <Typography.UserFullName {...args} />;
UserFullName.args = {
  children: 'Ian Kelley',
};

export const UserEmailAddress = (args) => <Typography.UserEmailAddress {...args} />;
UserEmailAddress.args = {
  children: 'ian_kelley@gmail.com',
};

export const PaymentHistoryTitle = (args) => <Typography.PaymentHistoryTitle {...args} />;
PaymentHistoryTitle.args = {
  children: 'Payment history',
};

export const PaymentDetailTitle = (args) => <Typography.PaymentDetailTitle {...args} />;
PaymentDetailTitle.args = {
  children: 'Deposit PayPal',
};

export const PaymentDetailDate = (args) => <Typography.PaymentDetailDate {...args} />;
PaymentDetailDate.args = {
  children: '4 march, 14:30',
};

export const PaymentDetailNumber = (args) => <Typography.PaymentDetailNumber {...args} />;
PaymentDetailNumber.args = {
  children: '+ 2,220',
};

export const PaymentDetailCurrency = (args) => <Typography.PaymentDetailCurrency {...args} />;
PaymentDetailCurrency.args = {
  children: 'usd',
};
