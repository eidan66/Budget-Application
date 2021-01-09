/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { FC } from 'react';
import Chart from 'react-apexcharts';
import { lineChartOptions, lineChartSeries, barChartSeries, barChartOptions } from '../../../constants/charts';
import * as S from './style';
interface IChartsProps {
  [property: string]: FC;
}

const Charts: IChartsProps = {
  Income: () => (
    <S.LineChartWrapper>
      <Chart options={lineChartOptions} series={lineChartSeries} type="line" />
    </S.LineChartWrapper>
  ),
  Activity: () => (
    <S.BarChartWrapper>
      <Chart options={barChartOptions} series={barChartSeries} type="bar" height={350} />
    </S.BarChartWrapper>
  ),
};

export default Charts;
