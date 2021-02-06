/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useContext } from 'react';
import { ExpenseCard } from '../../../components/organisms';
import * as S from './style';
import useLocalStorage from './../../../hooks/useLocalStorage';

import { PaymentContext } from '../../../contexts/payment/paymentContext';
import { UserContext } from '../../../contexts/user/userContext';
import { CategoriesContext } from '../../../contexts/categories/categoriesContext';

import { Slide } from 'react-awesome-reveal';
import { useHistory } from 'react-router';

import { IUserDetails, ICategory } from '../../../interfaces/context';

const transactionRenderByCategory = (
  transactions: any[],
  userData: IUserDetails[],
  category: string,
  favsListIds: string[],
  setPaymentFavorite: (favsListIds: string[]) => void,
  categories: ICategory[],
  history: any
) => {
  const categoryName = categories.map(({ name, color }) => {
    if (name === category) return color;
  });

  return transactions.map((transaction: any) => {
    return transaction.category === category ? (
      <S.TransactionWrapper key={transaction.id}>
        <Slide direction="left">
          <ExpenseCard
            id={transaction.id}
            onClick={() =>
              history.push({
                pathname: '/Map',
                search: `?position=${[transaction.location.lat, transaction.location.lng]}&avatarSrc=${
                  userData[0].avatar
                }&first_name=${userData[0].first_name}
                  &last_name=${userData[0].last_name}&business=${transaction.business}&time=${transaction.time}&date=${
                  transaction.date
                }&country=${transaction.location.country}&city=${transaction.location.city}&street=${
                  transaction.location.street
                }&map=${true}`,
                state: {
                  position: [transaction.location.lat, transaction.location.lng],
                  avatarSrc: userData[0].avatar,
                  first_name: userData[0].first_name,
                  last_name: userData[0].last_name,
                  business: transaction.business,
                  time: transaction.time,
                  date: transaction.date,
                  country: transaction.location.country,
                  city: transaction.location.city,
                  street: transaction.location.street,
                  map: true,
                },
              })
            }
            map={false}
            key={transaction.id}
            amount={transaction.amount}
            status={status}
            category={transaction.category}
            categoryColor={categoryName[0]}
            business={transaction.company}
            first_name={userData[0].first_name}
            last_name={userData[0].last_name}
            time={transaction.time}
            date={transaction.date}
            avatarSrc={userData[0].avatar}
            type={transaction.paymentType}
            favsListIds={favsListIds}
            setPaymentFavorite={setPaymentFavorite}
          />
        </Slide>
      </S.TransactionWrapper>
    ) : (
      ''
    );
  });
};

interface ITransactionProps {
  category: string;
  type?: 'Cancelled' | 'Income' | 'Expense';
}

const Transactions: FC<ITransactionProps> = ({ category }) => {
  const { paymentDetails } = useContext(PaymentContext);
  const { userDetails } = useContext(UserContext);
  const { categories } = useContext(CategoriesContext);
  const [favsListIds, setPaymentFavorite] = useLocalStorage('paymentFav', []);
  const history = useHistory();

  return (
    <S.TransactionContainer>
      <S.AllTransactionsWrapper>
        {transactionRenderByCategory(
          paymentDetails,
          userDetails,
          category,
          favsListIds,
          setPaymentFavorite,
          categories,
          history
        )}
      </S.AllTransactionsWrapper>
    </S.TransactionContainer>
  );
};

export default Transactions;
