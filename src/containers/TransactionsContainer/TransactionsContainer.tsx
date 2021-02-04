import React, { useContext } from 'react';
import { Transactions } from '../../views/pages';
import { PaymentContext } from '../../contexts/payment/paymentContext';
import { CategoriesContext } from '../../contexts/categories/categoriesContext';

const TransactionsContainer = () => {
  const { categories } = useContext(CategoriesContext);

  return <Transactions category={categories[0].name} />;
};

export default TransactionsContainer;
