import * as React from 'react';
import Loader from './Loader';

export default {
  title: 'components/atoms/Loader',
  component: Loader,
};

export const Card = (args) => <Loader.Card {...args} />;
export const Dot = (args) => <Loader.Dot {...args} />;
export const Spinner = (args) => <Loader.Spinner {...args} />;
