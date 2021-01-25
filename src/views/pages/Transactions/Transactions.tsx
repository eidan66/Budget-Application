import React, { FC, useEffect } from 'react';
import transactionData from '../../../mockup-tests/Payment_History.json';
import userData from '../../../mockup-tests/userDetails.json';
import { ExpenseCard } from '../../../components/organisms';
import * as S from './style';
import AOS from 'aos';
import 'aos/dist/aos.css';

const transactionRenderByCategory = (transactions, userdata, category: string) => {
  let countForFade = 0;
  return transactions.map((transaction) => {
    if (countForFade < 4) {
      countForFade += 1;

      return transaction.category === category ? (
        <S.TransactionWrapper>
          <ExpenseCard
            onClick={() => console.log('Hey from expenseCard !')}
            map={false}
            key={transaction.id}
            amount={transaction.amount}
            status={status}
            category={transaction.category}
            business={transaction.company}
            first_name={userdata.first_name}
            last_name={userdata.last_name}
            time={transaction.time}
            date={transaction.date}
            avatarSrc={userdata.avatar}
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
            onClick={() => console.log('Hey from expenseCard !')}
            map={false}
            key={transaction.id}
            amount={transaction.amount}
            status={status}
            category={transaction.category}
            business={transaction.company}
            first_name={userdata.first_name}
            last_name={userdata.last_name}
            time={transaction.time}
            date={transaction.date}
            avatarSrc={userdata.avatar}
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
  business: string;
  first_name: string;
  last_name: string;
  time: string;
  date: string;
  avatarSrc: string;
  amountColor?: string;
  categoryColor?: string;
  category: string;
  amount: string;
  status: string;
  type?: 'Cancelled' | 'Income' | 'Expense';
}

const Transactions: FC<ITransactionProps> = ({ category }) => {
  useEffect(() => {
    AOS.init({ duration: 750 });
  }, []);

  return (
    <S.TransactionContainer>
      <S.AllTransactionsWrapper>
        {transactionRenderByCategory(transactionData, userData, category)}
      </S.AllTransactionsWrapper>
    </S.TransactionContainer>
  );
};

export default Transactions;
