import React, { FC, useContext } from 'react';
import { getTime, numberWithCommas } from '../../helpers';
import { PaymentContext } from '../../contexts/payment/paymentContext';
import { Charts } from '../../components/organisms';
import { AppContext } from '../../contexts/app/appContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import { getSymbolFromCode } from 'currency-code-symbol-map';
import type { CurrencyCode } from '../../../node_modules/currency-code-symbol-map/lib/currencyCodeSymbolMapping';
import { IPaymentDetails } from './../../interfaces/context';

interface IChartContainer {
  chart?: string;
}

const ChartContainer: FC<IChartContainer> = ({ chart }) => {
  const { paymentDetails } = useContext(PaymentContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currencyList, setCurrencyList] = useLocalStorage('currencyList', []);
  const { currency } = React.useContext(AppContext);

  const currencyChecker = (paymentCurrency: string, paymentAmount: string) => {
    let rate = 1;
    Object.keys(currencyList).map((item) => {
      if (item === paymentCurrency) {
        rate = currencyList[item] * parseInt(paymentAmount);
      }
    });

    return rate.toFixed(0);
  };

  const incomeDataChart = (dataBase: IPaymentDetails[]) => {
    let month = 0;
    const newData = [...Array(12).fill(0)];

    dataBase.map((data: { paymentType: string; cancelled: boolean; date: string | number | Date; amount: string }) => {
      if (data.paymentType === 'Income' && !data.cancelled) {
        month = getTime(data.date);
        newData[month] += parseInt(currencyChecker(currency, data.amount));
      }
    });

    return newData;
  };

  const expenseDataChart = (dataBase: IPaymentDetails[]) => {
    let month = 0;
    const newData = [...Array(12).fill(0)];

    dataBase.map((data: { paymentType: string; cancelled: boolean; date: string | number | Date; amount: string }) => {
      if (data.paymentType === 'Expenses' && !data.cancelled) {
        month = getTime(data.date);
        newData[month] += parseInt(currencyChecker(currency, data.amount));
      }
    });

    return newData;
  };
  const canceledDataChart = (dataBase: IPaymentDetails[]) => {
    let month = 0;
    const newData = [...Array(12).fill(0)];

    dataBase.map((data: { paymentType: string; cancelled: boolean; date: string | number | Date; amount: string }) => {
      if (data.cancelled) {
        month = getTime(data.date);
        newData[month] += parseInt(currencyChecker(currency, data.amount));
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
    yaxis: {
      labels: {
        formatter: (val: string) => {
          return getSymbolFromCode(currency as CurrencyCode) + ' ' + numberWithCommas(currencyChecker(currency, val));
        },
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
          return getSymbolFromCode(currency as CurrencyCode) + ' ' + numberWithCommas(currencyChecker(currency, val));
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
    yaxis: {
      labels: {
        formatter: (val: string) => {
          return getSymbolFromCode(currency as CurrencyCode) + ' ' + numberWithCommas(currencyChecker(currency, val));
        },
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
          return getSymbolFromCode(currency as CurrencyCode) + ' ' + numberWithCommas(currencyChecker(currency, val));
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
