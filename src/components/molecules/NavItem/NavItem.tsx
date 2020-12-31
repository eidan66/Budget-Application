import React, { FC } from 'react';
import Icon from './../../atoms/Icon/Icon';
import Typography from './../../atoms/Typography/Typography';
import * as S from './style';

interface INavItem {
  variant?: 'subtitle1' | 'subtitle2';
}

interface INavItemProps {
  [property: string]: FC<INavItem>;
}

const NavItem: INavItemProps = {
  Dashboard: ({ variant }) => (
    <S.NavItemWrapper>
      <Icon.Dashboard />
      <Typography.SmallText variant={variant}>Dashboard</Typography.SmallText>
    </S.NavItemWrapper>
  ),
  Charts: ({ variant }) => (
    <S.NavItemWrapper>
      <Icon.Charts />
      <Typography.SmallText variant={variant}>Charts</Typography.SmallText>
    </S.NavItemWrapper>
  ),
  Cards: ({ variant }) => (
    <S.NavItemWrapper>
      <Icon.Cards />
      <Typography.SmallText variant={variant}>Cards</Typography.SmallText>
    </S.NavItemWrapper>
  ),
  Calendar: ({ variant }) => (
    <S.NavItemWrapper>
      <Icon.Calendar />
      <Typography.SmallText variant={variant}>Calendar</Typography.SmallText>
    </S.NavItemWrapper>
  ),
  Messages: ({ variant }) => (
    <S.NavItemWrapper>
      <Icon.Messages />
      <Typography.SmallText variant={variant}>Messages</Typography.SmallText>
    </S.NavItemWrapper>
  ),
  User: ({ variant }) => (
    <S.NavItemWrapper>
      <Icon.User />
      <Typography.SmallText variant={variant}>User</Typography.SmallText>
    </S.NavItemWrapper>
  ),
  Settings: ({ variant }) => (
    <S.NavItemWrapper>
      <Icon.Settings />
      <Typography.SmallText variant={variant}>Settings</Typography.SmallText>
    </S.NavItemWrapper>
  ),
};

export default NavItem;
