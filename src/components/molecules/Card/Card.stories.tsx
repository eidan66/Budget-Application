import React from 'react';
import { Card } from './';

export default {
  title: 'components/molecules/Card',
  component: Card,
};

export const CreditCard = (args) => <Card {...args} />;
CreditCard.args = {
  cardNumber: '**** **** **** 6857',
  cardHolderName: 'Ian Kelley',
  cardDate: '04 / 21',
};
