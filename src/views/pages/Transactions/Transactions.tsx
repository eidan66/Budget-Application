import React, { FC, useContext, useEffect } from 'react';
import { ExpenseCard } from '../../../components/organisms';
import * as S from './style';

import { PaymentContext } from '../../../contexts/payment/paymentContext';
import { UserContext } from '../../../contexts/user/userContext';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { IPaymentDetails, IUserDetails } from '../../../interfaces/context';

const transactionRenderByCategory = (transactions: any[], userData: IUserDetails[], category: string) => {
  let countForFade = 0;

  return transactions[0].map((transaction: any) => {
    if (countForFade < 4) {
      countForFade += 1;
      return transaction.category === category ? (
        <S.TransactionWrapper>
          <ExpenseCard
            onClick={() => console.log('Clicked from Transactions page')}
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
          />
        </S.TransactionWrapper>
      ) : (
        ''
      );
    } else {
      return transaction.category === category ? (
        <S.TransactionWrapper data-aos="fade-up">
          <ExpenseCard
            onClick={() => console.log('Clicked from Transactions page')}
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

  useEffect(() => {
    AOS.init({ duration: 750 });
  }, []);

  return (
    <S.TransactionContainer>
      <S.AllTransactionsWrapper>
        {transactionRenderByCategory(paymentDetails, userDetails, category)}
      </S.AllTransactionsWrapper>
    </S.TransactionContainer>
  );
};

export default Transactions;
