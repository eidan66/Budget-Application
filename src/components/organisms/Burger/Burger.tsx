import React from 'react';
import * as S from './style';
interface IBurger {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Burger: React.FC<IBurger> = ({ open, setOpen }) => {
  return (
    <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </S.StyledBurger>
  );
};

export default Burger;
