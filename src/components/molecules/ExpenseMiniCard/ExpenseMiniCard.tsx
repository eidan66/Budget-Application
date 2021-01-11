import React, { FC } from 'react';
import { Typography, Icon } from '../../atoms';
import * as S from './style';

interface IExpenseMiniCard {
  color?: string;
  category?: string;
  amount?: string;
  status?: string;
  map?: string;
  onClick?: () => void;
  type?: 'Cancelled' | 'Income' | 'Expense';
}

interface IExpenseMiniCardProps {
  [property: string]: FC<IExpenseMiniCard>;
}

const ExpenseMiniCard: IExpenseMiniCardProps = {
  Category: ({ category, color, onClick }) => (
    <S.ExpenseWrapper onClick={() => onClick()}>
      <Typography.SmallText variant="subtitle2">Category</Typography.SmallText>

      <S.CategoryDetailsWrapper color={color}>
        <Icon.Circle color={color} />
        <Typography.SubtitleText>{category}</Typography.SubtitleText>
      </S.CategoryDetailsWrapper>
    </S.ExpenseWrapper>
  ),
  Type: ({ type, color, onClick }) => (
    <S.ExpenseWrapper onClick={() => onClick()}>
      <Typography.SmallText variant="subtitle2">Type</Typography.SmallText>

      <S.CategoryDetailsWrapper color={color}>
        <Typography.SubtitleText>{type}</Typography.SubtitleText>
      </S.CategoryDetailsWrapper>
    </S.ExpenseWrapper>
  ),
  Map: ({ map, color, onClick }) => (
    <S.ExpenseWrapper onClick={() => onClick()}>
      <Typography.SmallText variant="subtitle2">Map</Typography.SmallText>

      <S.MapWrapper color={color}>
        <Icon.Map />
      </S.MapWrapper>
    </S.ExpenseWrapper>
  ),
  Amount: ({ amount, onClick }) => (
    <S.ExpenseWrapper onClick={() => onClick()}>
      <Typography.SmallText variant="subtitle2">Amount</Typography.SmallText>

      <S.AmountDetailsWrapper>
        <Typography.SubtitleText>{amount}</Typography.SubtitleText>
      </S.AmountDetailsWrapper>
    </S.ExpenseWrapper>
  ),
};

export default ExpenseMiniCard;
