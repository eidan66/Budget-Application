import React, { FC } from 'react';
import { ChartContainer } from '../../../containers';
import { Card, Summary } from '../../../components/molecules';
import * as S from './style';

interface IDashboardProps {
  last4Digits: number;
  first_name: string;
  last_name: string;
  exp_year: number;
  exp_month: number;
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
          <ChartContainer chart={'Income'} />
        </S.HeaderWrapper>
        <S.SummaryWrapper>
          <Summary summary="Income" revenue={incomeRevenue} percent={incomePercent} />
          <Summary summary="Expense" revenue={expenseRevenue} percent={expensePercent} />
        </S.SummaryWrapper>
        <S.ActivityWrapper>
          <ChartContainer chart={'Activity'} />
        </S.ActivityWrapper>
      </S.DashboardWrapper>
    </S.PageWrapper>
  );
};

export default Dashboard;
