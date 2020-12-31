import React, { FC } from 'react';
import * as S from './style';
import { Typography, Avatar } from '../../atoms';

interface IUserDetailsBox {
  userName: string;
  userEmail: string;
  src: string;
}
const UserDetailsBox: FC<IUserDetailsBox> = ({ userName, userEmail, src }) => {
  return (
    <S.Box>
      <S.UserDetailsWrapper>
        <Avatar avatarName={userName} src={src} />
        <Typography.UserFullName>{userName}</Typography.UserFullName>
        <Typography.UserEmailAddress>{userEmail}</Typography.UserEmailAddress>
      </S.UserDetailsWrapper>
    </S.Box>
  );
};
export default UserDetailsBox;
