import React, { FC, useContext } from 'react';
import { getTime, numberWithCommas } from '../../helpers';
import { PaymentContext } from '../../contexts/payment/paymentContext';
import { Charts } from '../../components/organisms';

interface IChartContainer {
  chart?: string;
}

const ChartContainer: FC<IChartContainer> = ({ chart }) => {
  const { paymentDetails } = useContext(PaymentContext);

  const incomeDataChart = (dataBase: any[]) => {
    let month = 0;
    const newData = [...Array(12).fill(0)];

    dataBase[0].map((data: { paymentType: string; cancelled: any; date: string | number | Date; amount: string }) => {
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

    dataBase[0].map((data: { paymentType: string; cancelled: any; date: string | number | Date; amount: string }) => {
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

    dataBase[0].map((data: { paymentType: string; cancelled: any; date: string | number | Date; amount: string }) => {
      if (data.cancelled) {
        month = getTime(data.date);
        newData[month] += parseInt(data.amount);
      }
    });

    return newData;
  };

  // *********** Income Chart ***********

  const lineChartSeries = [
    {
      name: 'Income',
      data: incomeDataChart(paymentDetails),
    },
  ];
  const lineChartOptions = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    colors: ['#5acaf7'],
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
      style: {
        fontSize: '25px',
      },
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

  const barChartSeries = [
    {
      name: 'Revenue',
      data: incomeDataChart(paymentDetails),
    },
    {
      name: 'Outgoing',
      data: expenseDataChart(paymentDetails),
    },
    {
      name: 'Canceled',
      data: canceledDataChart(paymentDetails),
    },
  ];

  const barChartOptions = {
    chart: {
      type: 'bar',
      redrawOnParentResize: true,
      redrawOnWindowResize: true,
      zoom: {
        enabled: false,
      },
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
      style: {
        fontSize: '25px',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2.5,
      colors: ['transparent'],
    },
    colors: ['#5acaf7', '#4333a0', '#ff8789'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    fill: {
      opacity: 1,
      colors: ['#5acaf7', '#4333a0', '#ff8789'],
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5,
      markers: {
        radius: 12,
      },
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

  return chart === 'Income' ? (
    <Charts.Income lineChartOptions={lineChartOptions} lineChartSeries={lineChartSeries} />
  ) : (
    <Charts.Activity barChartSeries={barChartSeries} barChartOptions={barChartOptions} />
  );
};

export default ChartContainer;
