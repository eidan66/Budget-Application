import React, { FC } from 'react';
import Icon from './../../atoms/Icon/Icon';
import Typography from './../../atoms/Typography/Typography';
import * as S from './style';

interface INavItem {
  variant?: 'subtitle1' | 'subtitle2';
  color?: string;
}

interface INavItemProps {
  [property: string]: FC<INavItem>;
}

const NavItem: INavItemProps = {
  Dashboard: ({ variant, color }) => (
    <S.NavItemWrapper>
      <Icon.Dashboard color={color} />
      <Typography.SmallText variant={variant}>Dashboard</Typography.SmallText>
    </S.NavItemWrapper>
  ),
  Charts: ({ variant, color }) => (
    <S.NavItemWrapper>
      <Icon.Charts color={color} />
      <Typography.SmallText variant={variant}>Charts</Typography.SmallText>
    </S.NavItemWrapper>
  ),
  Cards: ({ variant, color }) => (
    <S.NavItemWrapper>
      <Icon.Cards color={color} />
      <Typography.SmallText variant={variant}>Cards</Typography.SmallText>
    </S.NavItemWrapper>
  ),
  Calendar: ({ variant, color }) => (
    <S.NavItemWrapper>
      <Icon.Calendar color={color} />
      <Typography.SmallText variant={variant}>Calendar</Typography.SmallText>
    </S.NavItemWrapper>
  ),
  Messages: ({ variant, color }) => (
    <S.NavItemWrapper>
      <Icon.Messages color={color} />
      <Typography.SmallText variant={variant}>Messages</Typography.SmallText>
    </S.NavItemWrapper>
  ),
  User: ({ variant, color }) => (
    <S.NavItemWrapper>
      <Icon.User color={color} />
      <Typography.SmallText variant={variant}>User</Typography.SmallText>
    </S.NavItemWrapper>
  ),
  Settings: ({ variant, color }) => (
    <S.NavItemWrapper>
      <Icon.Settings color={color} />
      <Typography.SmallText variant={variant}>Settings</Typography.SmallText>
    </S.NavItemWrapper>
  ),
};

export default NavItem;
