import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Typography from './';
import * as I from '../../../models/typography';
import { color, size, weight } from '../../../models/typography';

export default {
  title: 'component/atom/Typography',
  component: Typography,
} as Meta;

export const Default = (args) => <Typography {...args} />;
Default.args = {
  color: color.GHOST,
  size: size.MD,
  text: 'This is Medium Typography text component!',
  weight: weight.LIGHT,
};

export const Large = (args) => <Typography {...args} />;
Large.args = {
  color: color.BLUEGEM,
  size: size.LG,
  text: 'This is Large Typography text component!',
  weight: weight.BOLD,
};

export const Small = (args) => <Typography {...args} />;
Small.args = {
  color: color.ULTRAMARINE,
  size: size.SM,
  text: 'This is Small Typography text component!',
  weight: weight.BOLD,
};
