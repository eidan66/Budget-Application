import React, { FC } from 'react';
import { Typography, Icon } from '../../atoms';
import { summaryColor, titleChecker, numberWithCommas } from '../../../helpers';
import { AppContext } from '../../../contexts/app/appContext';
import { getSymbolFromCode } from 'currency-code-symbol-map';
import type { CurrencyCode } from '../../../../node_modules/currency-code-symbol-map/lib/currencyCodeSymbolMapping';

import * as S from './style';

interface ISummaryProps {
  summary: 'Income' | 'Expense';
  revenue: number;
  percent: string;
}

const Summary: FC<ISummaryProps> = ({ summary, revenue, percent }) => {
  const IconComp = Icon[summary];
  const { currency } = React.useContext(AppContext);

  return (
    <S.SummaryWrapper>
      <S.SummaryHeaderWrapper>
        <S.TitleWrapper>
          <Typography.MediumText color="primary">{summary}</Typography.MediumText>
        </S.TitleWrapper>
        <S.IconWrapper>
          <IconComp />
        </S.IconWrapper>
      </S.SummaryHeaderWrapper>

      <S.RevenueWrapper color={summaryColor(summary)}>
        <Typography.SmallText variant="subtitle2">{titleChecker(summary)}</Typography.SmallText>
        <Typography.MediumText>
          {getSymbolFromCode(currency as CurrencyCode) + ' ' + numberWithCommas(revenue)}
        </Typography.MediumText>
      </S.RevenueWrapper>

      <S.SubtitleWrapper>
        <Typography.ExtraSmallText color="primary">
          {summary === 'Income' ? '+ ' : '- '}
          {percent}%
        </Typography.ExtraSmallText>
        <Typography.SmallText variant="subtitle2">Since last 3 months</Typography.SmallText>
      </S.SubtitleWrapper>
    </S.SummaryWrapper>
  );
};

export default Summary;
