import dataBase from '../mockup-tests/Payment_History.json';
import { getTime } from '../helpers';

export const getDataForLineChart = (dataBase) => {
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

export const lineChartSeries = [
  {
    name: 'Income',
    data: getDataForLineChart(dataBase),
  },
];
export const lineChartOptions = {
  chart: {
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  title: {
    text: 'Income',
    align: 'left',
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
};
