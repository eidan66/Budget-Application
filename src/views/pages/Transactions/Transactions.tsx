/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useContext, useEffect } from 'react';
import { ExpenseCard } from '../../../components/organisms';
import * as S from './style';
import useLocalStorage from './../../../hooks/useLocalStorage';

import { PaymentContext } from '../../../contexts/payment/paymentContext';
import { UserContext } from '../../../contexts/user/userContext';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { IUserDetails } from '../../../interfaces/context';

const transactionRenderByCategory = (
  transactions: any[],
  userData: IUserDetails[],
  category: string,
  favsListIds: string[],
  setPaymentFavorite: (favsListIds: string[]) => void
) => {
  let countForFade = 0;

  return transactions[0].map((transaction: any) => {
    if (countForFade < 4) {
      countForFade += 1;
      return transaction.category === category ? (
        <S.TransactionWrapper>
          <ExpenseCard
            id={transaction.id}
            onClick={() => console.log('Hey from expenseCard !')}
            map={false}
            key={transaction.id}
            amount={transaction.amount}
            status={status}
            category={transaction.category}
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
        </S.TransactionWrapper>
      ) : (
        ''
      );
    } else {
      return transaction.category === category ? (
        <S.TransactionWrapper data-aos="fade-up">
          <ExpenseCard
            id={transaction.id}
            onClick={() => console.log('Hey from expenseCard !')}
            map={false}
            key={transaction.id}
            amount={transaction.amount}
            status={status}
            category={transaction.category}
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
        </S.TransactionWrapper>
      ) : (
        ''
      );
    }
  });
};

interface ITransactionProps {
  category: string;
  type?: 'Cancelled' | 'Income' | 'Expense';
}

const Transactions: FC<ITransactionProps> = ({ category }) => {
  const { paymentDetails } = useContext(PaymentContext);
  const { userDetails } = useContext(UserContext);
  const [favsListIds, setPaymentFavorite] = useLocalStorage('paymentFav', []);

  useEffect(() => {
    AOS.init({ duration: 750 });
  }, []);

  return (
    <S.TransactionContainer>
      <S.AllTransactionsWrapper>
        {transactionRenderByCategory(paymentDetails, userDetails, category, favsListIds, setPaymentFavorite)}
      </S.AllTransactionsWrapper>
    </S.TransactionContainer>
  );
};

export default Transactions;
