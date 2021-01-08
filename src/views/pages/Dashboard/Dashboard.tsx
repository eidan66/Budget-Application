import React, { FC } from 'react';
import { Charts, ExpenseCard, Navbar, UserPayment } from '../../../components/organisms';

interface IDashboardProps {
  currentBalance: string;
  userCurrency: string;
}

const Dashboard: FC<IDashboardProps> = ({ currentBalance, userCurrency }) => {
  return (
    <div>
      <Navbar currentBalance={currentBalance} userCurrency={userCurrency} />
    </div>
  );
};

export default Dashboard;
