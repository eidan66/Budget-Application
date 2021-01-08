import React, { FC } from 'react';
import { Typography, Icon } from '../../atoms';
import { summaryColor, titleChecker } from '../../../helpers';
import * as S from './style';

interface ISummaryProps {
  summary: 'Income' | 'Expenses';
  revenue: string;
  percent: string;
}

const Summary: FC<ISummaryProps> = ({ summary, revenue, percent }) => {
  const IconComp = Icon[summary];
  return (
    <S.SummaryWrapper>
      <S.TitleWrapper>
        <Typography.MediumText color="primary">{summary}</Typography.MediumText>
      </S.TitleWrapper>

      <S.RevenueWrapper color={summaryColor(summary)}>
        <Typography.SmallText variant="subtitle2">{titleChecker(summary)}</Typography.SmallText>
        <Typography.MediumText>{revenue}</Typography.MediumText>
        <S.IconWrapper>
          <IconComp />
        </S.IconWrapper>
      </S.RevenueWrapper>

      <S.SubtitleWrapper>
        <Typography.ExtraSmallText color="primary">{percent}</Typography.ExtraSmallText>
        <Typography.SmallText variant="subtitle2">Since last 3 months</Typography.SmallText>
      </S.SubtitleWrapper>
    </S.SummaryWrapper>
  );
};

export default Summary;
