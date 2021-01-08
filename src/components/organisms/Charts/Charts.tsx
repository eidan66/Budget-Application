/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Chart from 'react-apexcharts';
import { lineChartOptions, lineChartSeries } from '../../../constants/chrats';
import { getTime } from '../../../helpers';

const Charts = () => {
  return <Chart options={lineChartOptions} series={lineChartSeries} type="line" height={350} />;
};

export default Charts;
