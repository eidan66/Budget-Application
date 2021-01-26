import React, { FC, useState } from 'react';
import * as S from './style';
import { NavItem, CurrentBalance } from '../../molecules';
import routes from '../../../constants/routes';
import type { CurrencyCode } from '../../../../node_modules/currency-code-symbol-map/lib/currencyCodeSymbolMapping';

const navbarRender = (
  currentIndex: number,
  setCurrentIndex: { (value: React.SetStateAction<number>): void; (index: number): void }
) =>
  routes.map(({ label, icon }, index) => {
    return (
      <NavItem
        key={index}
        index={index}
        onClick={setCurrentIndex}
        current={index === currentIndex}
        label={label}
        icon={icon}
      />
    );
  });

interface INavbarProps {
  variant?: 'subtitle1' | 'subtitle2';
  currentBalance: string;
  userCurrency: CurrencyCode;
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
