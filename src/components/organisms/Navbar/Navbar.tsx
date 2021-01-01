import React, { FC } from 'react';
import * as S from './style';
import { NavItem, CurrentBalance } from '../../molecules';

interface INavbarProps {
  variant?: 'subtitle1' | 'subtitle2';
  currentBalance: string;
}

const Navbar: FC<INavbarProps> = ({ currentBalance, variant }) => {
  return (
    <S.NavbarWrapper>
      <S.CurrentBalanceWrapper>
        <CurrentBalance currentBalance={currentBalance} />
      </S.CurrentBalanceWrapper>
      <S.NavItemsWrapper>
        <NavItem.Dashboard variant={variant} />
        <NavItem.Charts variant={variant} />
        <NavItem.Cards variant={variant} />
        <NavItem.Calendar variant={variant} />
        <NavItem.Messages variant={variant} />
        <NavItem.User variant={variant} />
        <NavItem.Settings variant={variant} />
      </S.NavItemsWrapper>
    </S.NavbarWrapper>
  );
};

export default Navbar;
