import React, { FC } from 'react';
import Icon from './../../atoms/Icon/Icon';
import Typography from './../../atoms/Typography/Typography';
import * as S from './style';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../../../contexts/navbar/navbarContext';

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
  const { open, setOpen } = React.useContext(NavbarContext);

  return (
    <S.NavItemContainer>
      <Link to={'/' + label}>
        <S.NavItemWrapper
          color={color}
          onClick={() => {
            onClick(index);
            setOpen(!open);
          }}
        >
          <IconComp color={color} />
          <Typography.SmallText variant={variant}>{label}</Typography.SmallText>
        </S.NavItemWrapper>
      </Link>
    </S.NavItemContainer>
  );
};

export default NavItem;
