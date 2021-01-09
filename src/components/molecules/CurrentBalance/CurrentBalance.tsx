import React, { FC } from 'react';
import * as S from './style';
import { Typography } from './../../atoms/';
import { numberWithCommas } from '../../../helpers';
import getSymbolFromCurrency from 'currency-symbol-map';

interface ICurrentBalanceProps {
  currentBalance: string;
  userCurrency: string;
}

const CurrentBalance: FC<ICurrentBalanceProps> = ({ userCurrency, currentBalance }) => {
  return (
    <S.Box>
      <S.CurrentBalanceWrapper>
        <Typography.MediumText>
          {numberWithCommas(currentBalance)}
          {getSymbolFromCurrency(userCurrency)}
        </Typography.MediumText>
        <Typography.SmallText variant="subtitle1">Current balance</Typography.SmallText>
      </S.CurrentBalanceWrapper>
    </S.Box>
  );
};

export default CurrentBalance;
