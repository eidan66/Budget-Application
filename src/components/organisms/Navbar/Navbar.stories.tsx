import React from 'react';
import Navbar from './';

export default {
  title: 'components/organisms/Navbar',
  component: Navbar,
};

export const SideNavbar = (args) => <Navbar {...args} />;
SideNavbar.args = {
  currentBalance: '$25,650',
  variant: 'subtitle2',
};
