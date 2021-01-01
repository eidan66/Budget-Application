import React from 'react';
import pic from '../../../assets/images/avatar.jpg';
import { UserDetailsBox } from './';

export default {
  title: 'components/molecules/UserDetails',
  component: UserDetailsBox,
};

export const Userdetails = (args) => <UserDetailsBox {...args} />;
Userdetails.args = {
  userName: 'Idan Levian',
  userEmail: 'eidan47@gmail.com',
  src: pic,
};
