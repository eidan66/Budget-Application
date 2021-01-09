import dataBase from '../mockup-tests/Payment_History.json';
import { getTime, numberWithCommas } from '../helpers';

const incomeDataChart = (dataBase) => {
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

const expenseDataChart = (dataBase) => {
  let month = 0;
  const newData = [...Array(12).fill(0)];

  dataBase.map((data) => {
    if (data.paymentType === 'Expenses' && !data.cancelled) {
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
      formatter: (val) => {
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
      columnWidth: '55%',
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
    width: 2,
    colors: ['transparent'],
  },
  colors: ['#4333a0', '#ff0000'],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  fill: {
    opacity: 1,
    colors: ['#4333a0', '#ff0000'],
  },
  tooltip: {
    y: {
      formatter: (val) => {
        return '$ ' + numberWithCommas(val);
      },
    },
  },
};
