import React, { FC } from 'react';
import { ExpenseMiniCard, ExpensesDetails } from '../../molecules';
import * as S from './style';

interface IExpenseCardProps {
  business: string;
  name: string;
  time: string;
  date: string;
  avatarSrc: string;
  clickedColor?: string;
  amountColor?: string;
  categoryColor?: string;
  category: string;
  amount: string;
  status: string;
  note: string;
  receipt?: 'Cancelled' | 'Income' | 'Expense';
}

const ExpenseCard: FC<IExpenseCardProps> = ({
  amount,
  status,
  clickedColor,
  amountColor,
  categoryColor,
  category,
  business,
  name,
  time,
  date,
  avatarSrc,
  note,
  receipt,
}) => {
  return (
    <S.ExpenseWrapper color={clickedColor}>
      <S.ExpenseDetailsWrapper>
        <ExpensesDetails business={business} name={name} time={time} date={date} avatarSrc={avatarSrc} />
      </S.ExpenseDetailsWrapper>

      <S.ExpenseCardsWrapper>
        <S.ExpenseMiniCardsWrapper>
          <ExpenseMiniCard.Category category={category} color={categoryColor} />
          <ExpenseMiniCard.AddNote note={note} />
        </S.ExpenseMiniCardsWrapper>

        <S.ExpenseMiniCardsWrapper>
          <ExpenseMiniCard.Amount amount={amount} status={status} color={amountColor} />
          <ExpenseMiniCard.Receipt receipt={receipt} />
        </S.ExpenseMiniCardsWrapper>
      </S.ExpenseCardsWrapper>
    </S.ExpenseWrapper>
  );
};

export default ExpenseCard;
