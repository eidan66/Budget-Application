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

export const Default = Template.bind({});
Default.args = {
  icon: E.icon.HOME,
};
