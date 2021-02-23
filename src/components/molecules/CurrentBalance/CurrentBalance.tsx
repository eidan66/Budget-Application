import React, { FC } from 'react';
import * as S from './style';
import { Typography } from './../../atoms/';
import { numberWithCommas } from '../../../helpers';
import { getSymbolFromCode } from 'currency-code-symbol-map';
import type { CurrencyCode } from '../../../../node_modules/currency-code-symbol-map/lib/currencyCodeSymbolMapping';
interface ICurrentBalanceProps {
  currentBalance: string;
  userCurrency: CurrencyCode;
}

const CurrentBalance: FC<ICurrentBalanceProps> = ({ userCurrency, currentBalance }) => {
  return (
    <S.Box>
      <S.CurrentBalanceWrapper>
        <Typography.MediumText>
          {numberWithCommas(currentBalance)}
          {getSymbolFromCode(userCurrency)}
        </Typography.MediumText>
        <Typography.SmallText variant="subtitle1">Current balance</Typography.SmallText>
      </S.CurrentBalanceWrapper>
    </S.Box>
  );
};

export default CurrentBalance;
