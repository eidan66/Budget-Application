/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { FC } from 'react';
import Chart from 'react-apexcharts';
import { lineChartOptions, lineChartSeries, barChartSeries, barChartOptions } from '../../../constants/charts';

interface IChartsProps {
  [property: string]: FC;
}

const Charts: IChartsProps = {
  Income: () => <Chart options={lineChartOptions} series={lineChartSeries} type="line" height={350} />,
  Activity: () => <Chart options={barChartOptions} series={barChartSeries} type="bar" height={350} />,
};

export default Charts;
