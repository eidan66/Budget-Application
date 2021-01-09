import React, { FC } from 'react';
import * as S from './style';
import { Typography, Avatar } from '../../atoms';

interface IUserDetailsBoxProps {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}
const UserDetailsBox: FC<IUserDetailsBoxProps> = ({ last_name, first_name, email, avatar }) => {
  return (
    <S.Box>
      <S.UserDetailsWrapper>
        <Avatar avatarName={first_name} avatar={avatar} />
        <Typography.SmallText variant="subtitle1" color="primary">
          {first_name + ' ' + last_name}
        </Typography.SmallText>
        <Typography.SmallText variant="subtitle1" color="textPrimary">
          {email}
        </Typography.SmallText>
      </S.UserDetailsWrapper>
    </S.Box>
  );
};
export default UserDetailsBox;
