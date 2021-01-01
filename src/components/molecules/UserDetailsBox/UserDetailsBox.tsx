import React, { FC } from 'react';
import * as S from './style';
import { Typography, Avatar } from '../../atoms';

interface IUserDetailsBoxProps {
  userName: string;
  userEmail: string;
  src: string;
}
const UserDetailsBox: FC<IUserDetailsBoxProps> = ({ userName, userEmail, src }) => {
  return (
    <S.Box>
      <S.UserDetailsWrapper>
        <Avatar avatarName={userName} src={src} />
        <Typography.SmallText variant="subtitle1" color="primary">
          {userName}
        </Typography.SmallText>
        <Typography.SmallText variant="subtitle1" color="textPrimary">
          {userEmail}
        </Typography.SmallText>
      </S.UserDetailsWrapper>
    </S.Box>
  );
};
export default UserDetailsBox;
