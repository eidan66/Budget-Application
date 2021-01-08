import React, { FC, useState } from 'react';
import * as S from './style';
import { NavItem, CurrentBalance } from '../../molecules';
import routes from '../../../constants/routes';

const navbarRender = (currentIndex, setCurrentIndex) =>
  routes.map(({ label, icon }, index) => {
    return (
      <NavItem index={index} onClick={setCurrentIndex} current={index === currentIndex} label={label} icon={icon} />
    );
  });

interface INavbarProps {
  variant?: 'subtitle1' | 'subtitle2';
  currentBalance: string;
  userCurrency: string;
}
const Navbar: FC<INavbarProps> = ({ currentBalance, userCurrency }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <S.NavbarWrapper>
      <S.CurrentBalanceWrapper>
        <CurrentBalance userCurrency={userCurrency} currentBalance={currentBalance} />
      </S.CurrentBalanceWrapper>
      <S.NavItemsWrapper>{navbarRender(currentIndex, setCurrentIndex)}</S.NavItemsWrapper>
    </S.NavbarWrapper>
  );
};

export default Navbar;
