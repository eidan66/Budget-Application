import React, { FC } from 'react';
import * as S from './style';
import { Typography } from './../../atoms/';

interface ICurrentBalanceProps {
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
