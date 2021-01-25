import React, { FC, useState } from 'react';
import { ExpenseMiniCard, ExpensesDetails } from '../../molecules';
import Icon from './../../atoms/Icon/Icon';
import * as S from './style';

interface IExpenseCardProps {
  business: string;
  first_name: string;
  last_name: string;
  time: string;
  date: string;
  avatarSrc: string;
  clickedColor?: string;
  amountColor?: string;
  categoryColor?: string;
  category: string;
  amount: string;
  status: string;
  map: boolean;
  type?: 'Cancelled' | 'Income' | 'Expense';
  onClick: () => void;
}

const ExpenseCard: FC<IExpenseCardProps> = ({
  amount,
  status,
  clickedColor,
  amountColor,
  categoryColor,
  category,
  business,
  first_name,
  last_name,
  time,
  date,
  avatarSrc,
  type,
  map,
  onClick,
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <S.ExpenseWrapper color={clickedColor}>
      <S.ExpenseDetailsWrapper>
        <ExpensesDetails
          map={map}
          business={business}
          first_name={first_name}
          last_name={last_name}
          time={time}
          date={date}
          avatarSrc={avatarSrc}
        />
        <S.ToggleWrapper>
          {!toggle ? (
            <div onClick={() => setToggle(!toggle)}>
              <Icon.FavoriteEmpty />
            </div>
          ) : (
            <div onClick={() => setToggle(!toggle)}>
              <Icon.FavoriteSelected />
            </div>
          )}
        </S.ToggleWrapper>
      </S.ExpenseDetailsWrapper>

      <S.ExpenseCardsWrapper>
        <S.ExpenseMiniCardsWrapper>
          <ExpenseMiniCard.Category category={category} color={categoryColor} />
          <ExpenseMiniCard.Type type={type} />
        </S.ExpenseMiniCardsWrapper>

        <S.ExpenseMiniCardsWrapper>
          <ExpenseMiniCard.Amount amount={amount} status={status} color={amountColor} />
          <ExpenseMiniCard.Map onClick={onClick} />
        </S.ExpenseMiniCardsWrapper>
      </S.ExpenseCardsWrapper>
    </S.ExpenseWrapper>
  );
};

export default ExpenseCard;
