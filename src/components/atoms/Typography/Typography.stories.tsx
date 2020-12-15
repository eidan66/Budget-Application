import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Typography from './';
import * as I from '../../../models/typography/typography';

export default {
  title: 'Typography',
  component: Typography,
} as Meta;

const Template: Story<I.Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'blue',
  size: 'lg',
  text: 'This is Typography text component!',
};
