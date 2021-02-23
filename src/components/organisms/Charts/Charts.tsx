/* eslint-disable @typescript-eslint/ban-types */
import { FC } from 'react';
import Chart from 'react-apexcharts';

import * as S from './style';

interface IChart {
  lineChartOptions?: object;
  lineChartSeries?: Array<object>;
  barChartOptions?: object;
  barChartSeries?: Array<object>;
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
