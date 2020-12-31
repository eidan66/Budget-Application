import React from 'react';
import Avatar from './';
import pic from '../../../assets/images/avatar.jpg';

export default {
  title: 'components/atoms/Avatar',
  component: Avatar,
};

export const UserAvatar = (args) => <Avatar {...args} />;
UserAvatar.args = {
  avatarName: 'Ian Kelley',
  src: pic,
};
