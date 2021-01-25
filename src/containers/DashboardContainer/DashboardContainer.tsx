import React from 'react';
import { Dashboard } from '../../views/pages';

// import { PaymentContext } from '../../contexts/payment/paymentContext';
import { UserContext } from '../../contexts/user/userContext';

const DashboardContainer = () => {
  const { userDetails } = React.useContext(UserContext);
  // const { paymentDetails } = React.useContext(PaymentContext);

  return (
    <Dashboard
      last4Digits={userDetails[0].credit_card.last4Digits}
      first_name={userDetails[0].first_name}
      last_name={userDetails[0].last_name}
      exp_year={userDetails[0].credit_card.exp_year}
      exp_month={userDetails[0].credit_card.exp_month}
      incomeRevenue={'incomeRevenue'}
      incomePercent={'incomePercent'}
      expenseRevenue={'expenseRevenue'}
      expensePercent={'expensePercent'}
    />
  );
};

export default DashboardContainer;
