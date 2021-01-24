import React, { FC } from 'react';
import { Charts } from '../../../components/organisms';
import { Card, Summary } from '../../../components/molecules';
import * as S from './style';

interface IDashboardProps {
  last4Digits: number;
  first_name: string;
  last_name: string;
  exp_year: string;
  exp_month: string;
  incomeRevenue: string;
  incomePercent: string;
  expenseRevenue: string;
  expensePercent: string;
}

const Dashboard: FC<IDashboardProps> = ({
  last4Digits,
  first_name,
  last_name,
  exp_year,
  exp_month,

  incomeRevenue,
  incomePercent,
  expenseRevenue,
  expensePercent,
}) => {
  return (
    <S.PageWrapper>
      <S.DashboardWrapper>
        <S.HeaderWrapper>
          <Card
            last4Digits={last4Digits}
            first_name={first_name}
            last_name={last_name}
            exp_year={exp_year}
            exp_month={exp_month}
          />
          <Charts.Income />
        </S.HeaderWrapper>
        <S.SummaryWrapper>
          <Summary summary="Income" revenue={incomeRevenue} percent={incomePercent} />
          <Summary summary="Expense" revenue={expenseRevenue} percent={expensePercent} />
        </S.SummaryWrapper>
        <S.ActivityWrapper>
          <Charts.Activity />
        </S.ActivityWrapper>
      </S.DashboardWrapper>
    </S.PageWrapper>
  );
};

export default Dashboard;
