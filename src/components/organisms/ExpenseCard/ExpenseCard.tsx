import React, { FC, useContext, useEffect, useState } from 'react';
import { ExpenseMiniCard, ExpensesDetails } from '../../molecules';
import Icon from './../../atoms/Icon/Icon';
import * as S from './style';
// import { FavoritesContext } from '../../../contexts/favorites/favoritesContext';

interface IExpenseCardProps {
  id: string;
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
  favsListIds: string[];
  setPaymentFavorite: (favsListIds: string[]) => void;
}

const ExpenseCard: FC<IExpenseCardProps> = ({
  id,
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
  favsListIds,
  setPaymentFavorite,
  onClick,
}) => {
  const [toggle, setToggle] = useState(false);
  // const { favoritePaymentID, setPaymentFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    if (favsListIds.length) {
      const cardId = favsListIds.find((cardId: string) => cardId === id);
      if (cardId) {
        setToggle(true);
      }
    }
  }, []);

  const handler = () => {
    let newFavsListIds = [];

    if (toggle) {
      newFavsListIds = favsListIds.filter((cardId: string) => cardId !== id);
    } else {
      newFavsListIds = [...favsListIds, id];
    }

    setPaymentFavorite(newFavsListIds);
    setToggle((oldToggler) => !oldToggler);
  };

  const FavIcon = !toggle ? Icon.FavoriteEmpty : Icon.FavoriteSelected;
  // TODO: Check about alternative for this. We don't want render xK time's the component.
  //  ** useMemo

  console.log('rendered');

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
          <div onClick={handler}>
            <FavIcon />
          </div>
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
