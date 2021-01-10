import React from 'react';
import Chart from 'react-apexcharts';
import { lineChartOptions, lineChartSeries } from '../../../constants/charts';
import { getTime } from '../../../helpers';

export const getDataForChart = (dataBase) => {
  //   const dates = { Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0, Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0 };
  let month = 0;
  const newData = [...Array(12).fill(0)];

  dataBase.map((data) => {
    if (data.paymentType === 'Income' && !data.cancelled) {
      month = getTime(data.date);
      newData[month] += parseInt(data.amount);
    }
  });

  return newData;
};

const Charts = () => {
  return <Chart options={lineChartOptions} series={lineChartSeries} type="line" height={350} />;
};

export default Charts;
