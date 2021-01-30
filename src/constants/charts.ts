import dataBase from '../mockup-tests/Payment_History.json';
import { getTime, numberWithCommas } from '../helpers';

const incomeDataChart = (dataBase: any[]) => {
  let month = 0;
  const newData = [...Array(12).fill(0)];

  dataBase.map((data: { paymentType: string; cancelled: any; date: string | number | Date; amount: string }) => {
    if (data.paymentType === 'Income' && !data.cancelled) {
      month = getTime(data.date);
      newData[month] += parseInt(data.amount);
    }
  });

  return newData;
};

const expenseDataChart = (dataBase: any[]) => {
  let month = 0;
  const newData = [...Array(12).fill(0)];

  dataBase.map((data: { paymentType: string; cancelled: any; date: string | number | Date; amount: string }) => {
    if (data.paymentType === 'Expenses' && !data.cancelled) {
      month = getTime(data.date);
      newData[month] += parseInt(data.amount);
    }
  });

  return newData;
};
const canceledDataChart = (dataBase: any[]) => {
  let month = 0;
  const newData = [...Array(12).fill(0)];

  dataBase.map((data: { paymentType: string; cancelled: any; date: string | number | Date; amount: string }) => {
    if (data.cancelled) {
      month = getTime(data.date);
      newData[month] += parseInt(data.amount);
    }
  });

  return newData;
};

// *********** Income Chart ***********

export const lineChartSeries = [
  {
    name: 'Income',
    data: incomeDataChart(dataBase),
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
    curve: 'smooth',
  },
  markers: {
    size: 1,
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

  tooltip: {
    y: {
      formatter: (val: string) => {
        return '$ ' + numberWithCommas(val);
      },
    },
  },
};

// *********** Activity Chart ***********

export const barChartSeries = [
  {
    name: 'Revenue',
    data: incomeDataChart(dataBase),
  },
  {
    name: 'Outgoing',
    data: expenseDataChart(dataBase),
  },
  {
    name: 'Canceled',
    data: canceledDataChart(dataBase),
  },
];

export const barChartOptions = {
  chart: {
    type: 'bar',
    redrawOnParentResize: true,
    redrawOnWindowResize: true,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '73%',
      endingShape: 'rounded',
    },
  },
  title: {
    text: 'Activity',
    align: 'left',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2.5,
    colors: ['transparent'],
  },
  colors: ['#2c9c49', '#2c6b9c', '#8c2432'],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  fill: {
    opacity: 1,
    colors: ['#2c9c49', '#2c6b9c', '#8c2432'],
  },
  tooltip: {
    y: {
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      formatter: (val: string) => {
        return '$ ' + numberWithCommas(val);
      },
    },
  },
};
