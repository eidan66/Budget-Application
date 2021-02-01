/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { FC } from 'react';
import Chart from 'react-apexcharts';

import * as S from './style';

interface IChart {
  lineChartOptions?: object;
  lineChartSeries?: Array<any>;
  barChartOptions?: object;
  barChartSeries?: Array<any>;
}

interface IChartsProps {
  [property: string]: FC<IChart>;
}

const Charts: IChartsProps = {
  Income: ({ lineChartOptions, lineChartSeries }) => (
    <S.LineChartWrapper>
      <Chart options={lineChartOptions} series={lineChartSeries} type="line" />
    </S.LineChartWrapper>
  ),
  Activity: ({ barChartOptions, barChartSeries }) => (
    <S.BarChartWrapper>
      <Chart options={barChartOptions} series={barChartSeries} type="bar" height={350} />
    </S.BarChartWrapper>
  ),
};

export default Charts;
