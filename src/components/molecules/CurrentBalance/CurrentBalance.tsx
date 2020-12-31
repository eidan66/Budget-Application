import React, { FC } from 'react';
import * as S from './style';
import { Typography } from './../../atoms/';

interface ICurrentBalanceProps {
  variant?: 'subtitle1' | 'subtitle2';
  currentBalance: string;
}

const CurrentBalance: FC<ICurrentBalanceProps> = ({ currentBalance }) => {
  return (
    <S.Box>
      <S.CurrentBalanceWrapper>
        <Typography.LargeText>{currentBalance}</Typography.LargeText>
        <Typography.SmallText variant="subtitle1">Current balance</Typography.SmallText>
      </S.CurrentBalanceWrapper>
    </S.Box>
  );
};

export default CurrentBalance;
