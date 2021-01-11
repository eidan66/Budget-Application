import React, { FC, useEffect } from 'react';
import {} from '../../../components/molecules';
import transactionData from '../../../mockup-tests/Payment_History.json';
import userData from '../../../mockup-tests/userDetails.json';
import { ExpenseCard } from '../../../components/organisms';
import * as S from './style';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aosSetting from '../../../constants/aosSetting.json';

const transactionRenderByCategory = (transactions, userdata, category: string) => {
  let countForFade = 0;
  return transactions.map((transaction) => {
    if (countForFade < 4) {
      countForFade += 1;

      return transaction.category === category ? (
        <S.TransactionWrapper>
          <ExpenseCard
            key={transaction.id}
            amount={transaction.amount}
            status={status}
            //   categoryColor={categoryColor}
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
            key={transaction.id}
            amount={transaction.amount}
            status={status}
            //   categoryColor={categoryColor}
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
  clickedColor?: string;
  amountColor?: string;
  categoryColor?: string;
  category: string;
  amount: string;
  status: string;
  type?: 'Cancelled' | 'Income' | 'Expense';
}

const Transactions: FC<ITransactionProps> = ({
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
}) => {
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
