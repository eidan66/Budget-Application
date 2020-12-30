import React, { FC } from 'react';
import Icon from './../../atoms/Icon/Icon';
import Typography from './../../atoms/Typography/Typography';
import * as S from './style';

interface INavItem {
  [property: string]: FC;
}

const NavItem: INavItem = {
  Dashboard: () => (
    <S.NavItemWrapper>
      <Icon.Dashboard />
      <Typography.SelectedNavBar>Dashboard</Typography.SelectedNavBar>
    </S.NavItemWrapper>
  ),
  Charts: () => (
    <S.NavItemWrapper>
      <Icon.Charts />
      <Typography.UnSelectedNavBar>Charts</Typography.UnSelectedNavBar>
    </S.NavItemWrapper>
  ),
  Cards: () => (
    <S.NavItemWrapper>
      <Icon.Cards />
      <Typography.UnSelectedNavBar>Cards</Typography.UnSelectedNavBar>
    </S.NavItemWrapper>
  ),
  Calendar: () => (
    <S.NavItemWrapper>
      <Icon.Calendar />
      <Typography.UnSelectedNavBar>Calendar</Typography.UnSelectedNavBar>
    </S.NavItemWrapper>
  ),
  Messages: () => (
    <S.NavItemWrapper>
      <Icon.Messages />
      <Typography.UnSelectedNavBar>Messages</Typography.UnSelectedNavBar>
    </S.NavItemWrapper>
  ),
  User: () => (
    <S.NavItemWrapper>
      <Icon.User />
      <Typography.UnSelectedNavBar>User</Typography.UnSelectedNavBar>
    </S.NavItemWrapper>
  ),
  Settings: () => (
    <S.NavItemWrapper>
      <Icon.Settings />
      <Typography.UnSelectedNavBar>Settings</Typography.UnSelectedNavBar>
    </S.NavItemWrapper>
  ),
};

export default NavItem;
