import React, { FC } from 'react';
import { Typography, Icon } from '../../atoms';
import * as S from './style';

interface ISummaryProps {
  summary: string;
  revenueTitle: string;
  revenue: string;
  percent: string;
  icon: 'Expense' | 'Income';
}

const revenueColor = (icon) => {
  return icon === 'Income' ? '#3c8c30' : '#ff0000';
};

const Summary: FC<ISummaryProps> = ({ summary, revenueTitle, revenue, percent, icon }) => {
  const IconComp = Icon[icon];
  return (
    <S.SummaryWrapper>
      <S.TitleWrapper>
        <Typography.MediumText color="primary">{summary}</Typography.MediumText>
      </S.TitleWrapper>

      <S.RevenueWrapper color={revenueColor(icon)}>
        <Typography.SmallText variant="subtitle2">{revenueTitle}</Typography.SmallText>
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
