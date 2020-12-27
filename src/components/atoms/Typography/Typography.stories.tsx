import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Typography from './';
import * as I from '../../../models/typography/typography';
import * as E from '../../../containers/enums/typography/typography';
export default {
  title: 'Typography',
  component: Typography,
} as Meta;

const Template: Story<I.Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: E.color.GHOST,
  size: E.size.MD,
  text: 'This is Medium Typography text component!',
  weight: E.weight.LIGHT,
};

export const Large = Template.bind({});
Large.args = {
  color: E.color.BLUEGEM,
  size: E.size.LG,
  text: 'This is Large Typography text component!',
  weight: E.weight.BOLD,
};

export const Small = Template.bind({});
Small.args = {
  color: E.color.ULTRAMARINE,
  size: E.size.SM,
  text: 'This is Small Typography text component!',
  weight: E.weight.BOLD,
};
