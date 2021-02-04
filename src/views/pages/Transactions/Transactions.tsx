/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useContext, useEffect } from 'react';
import { ExpenseCard } from '../../../components/organisms';
import * as S from './style';
import useLocalStorage from './../../../hooks/useLocalStorage';

import { PaymentContext } from '../../../contexts/payment/paymentContext';
import { UserContext } from '../../../contexts/user/userContext';
import { CategoriesContext } from '../../../contexts/categories/categoriesContext';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { IUserDetails, ICategory } from '../../../interfaces/context';

const transactionRenderByCategory = (
  transactions: any[],
  userData: IUserDetails[],
  category: string,
  favsListIds: string[],
  setPaymentFavorite: (favsListIds: string[]) => void,
  categories: ICategory[]
) => {
  const categoryName = categories.map(({ name, color }) => {
    if (name === category) return color;
  });

  return transactions.map((transaction: any) => {
    return transaction.category === category ? (
      <S.TransactionWrapper data-aos="zoom-in" key={transaction.id}>
        <ExpenseCard
          id={transaction.id}
          onClick={() => console.log('Hey from expenseCard !')}
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

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: true, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 10, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
    });
    // AOS.init({ duration: 750 });
  }, []);

  return (
    <S.TransactionContainer>
      <S.AllTransactionsWrapper>
        {transactionRenderByCategory(
          paymentDetails,
          userDetails,
          category,
          favsListIds,
          setPaymentFavorite,
          categories
        )}
      </S.AllTransactionsWrapper>
    </S.TransactionContainer>
  );
};

export default Transactions;
