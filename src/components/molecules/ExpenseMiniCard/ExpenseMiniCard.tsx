import React, { FC } from 'react';
import { Typography, Icon } from '../../atoms';
import * as S from './style';

interface IExpenseMiniCard {
  color?: string;
  category?: string;
  amount?: string;
  status?: string;
  note?: string;
  onClick?: () => void;
  receipt?: 'Cancelled' | 'Income' | 'Expense';
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
  AddNote: ({ note, color, onClick }) => (
    <S.ExpenseWrapper onClick={() => onClick()}>
      <Typography.SmallText variant="subtitle2">Add Note</Typography.SmallText>

      <S.CategoryDetailsWrapper color={color}>
        <Typography.SubtitleText>{note}</Typography.SubtitleText>
      </S.CategoryDetailsWrapper>
    </S.ExpenseWrapper>
  ),
  Receipt: ({ receipt, color, onClick }) => (
    <S.ExpenseWrapper onClick={() => onClick()}>
      <Typography.SmallText variant="subtitle2">Receipt</Typography.SmallText>

      <S.CategoryDetailsWrapper color={color}>
        <Typography.SubtitleText>{receipt}</Typography.SubtitleText>
      </S.CategoryDetailsWrapper>
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
