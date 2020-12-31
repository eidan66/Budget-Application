import React from 'react';
import pic from '../../../assets/images/avatar.jpg';
import { UserDetailsBox } from './';

export default {
  title: 'components/molecules/UserDetails',
  component: UserDetailsBox,
};

export const Userdetails = (args) => <UserDetailsBox {...args} />;
Userdetails.args = {
  userName: 'Ian Kelley',
  userEmail: 'ian_kelley@gmail.com',
  src: pic,
};
