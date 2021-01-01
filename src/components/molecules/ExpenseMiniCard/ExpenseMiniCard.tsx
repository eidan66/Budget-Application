import React, { FC } from 'react';
import { Typography, Icon } from '../../atoms';
import * as S from './style';

interface IExpenseMiniCard {
  color?: string;
  category: string;
  amount: string;
  status: string;
}

interface IExpenseMiniCardProps {
  [property: string]: FC<IExpenseMiniCard>;
}

const ExpenseMiniCards: IExpenseMiniCardProps = {
  Category: ({ category, color }) => (
    <S.ExpenseWrapper>
      <Typography.SmallText variant="subtitle2">Category</Typography.SmallText>

      <S.CategoryDetailsWrapper color={color}>
        <Icon.Circle color={color} />
        <Typography.SubtitleText>{category}</Typography.SubtitleText>
      </S.CategoryDetailsWrapper>
    </S.ExpenseWrapper>
  ),
  Amount: ({ amount, status, color }) => (
    <S.ExpenseWrapper>
      <Typography.SmallText variant="subtitle2">Amount</Typography.SmallText>

      <S.AmountDetailsWrapper color={color}>
        <Typography.SubtitleText>{amount}</Typography.SubtitleText>

        <S.AmountStatusDetailsWrapper color={color}>
          <Typography.SubtitleText>{status}</Typography.SubtitleText>
        </S.AmountStatusDetailsWrapper>
      </S.AmountDetailsWrapper>
    </S.ExpenseWrapper>
  ),
};

export default ExpenseMiniCards;
