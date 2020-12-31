import React from 'react';
import * as S from './style';
import { Typography } from './../../atoms/';

const CurrentBalance = ({ currentBalance }) => {
  return (
    <S.Box>
      <S.CurrentBalanceWrapper>
        <Typography.CurrentBalanceNumber>{currentBalance}</Typography.CurrentBalanceNumber>
        <Typography.CurrentBalance />
      </S.CurrentBalanceWrapper>
    </S.Box>
  );
};

export default CurrentBalance;
