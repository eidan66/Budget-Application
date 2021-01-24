import React, { FC } from 'react';
import Icon from './../../atoms/Icon/Icon';
import Typography from './../../atoms/Typography/Typography';
import * as S from './style';
import { Link } from 'react-router-dom';

interface INavItem {
  label: string;
  icon: string;
  current: boolean;
  onClick: (index: number) => void;
  index: number;
}

const NavItem: FC<INavItem> = ({ label, icon, current, onClick, index }) => {
  const variant = current ? 'subtitle1' : 'subtitle2';
  const color = current ? 'white' : '#C5C0E5';
  const IconComp = Icon[icon];
  return (
    <Link to={label === 'Dashboard' ? '/' : '/' + label}>
      <S.NavItemWrapper onClick={() => onClick(index)}>
        <IconComp color={color} />
        <Typography.SmallText variant={variant}>{label}</Typography.SmallText>
      </S.NavItemWrapper>
    </Link>
  );
};

export default NavItem;
