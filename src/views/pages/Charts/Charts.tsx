import React from 'react';
import Chart from 'react-apexcharts';
import { getTime, numberWithCommas } from '../../../helpers';
import { PaymentContext } from '../../../contexts/payment/paymentContext';
import { CategoriesContext } from '../../../contexts/categories/categoriesContext';
import { AppContext } from '../../../contexts/app/appContext';
import useLocalStorage from './../../../hooks/useLocalStorage';
import { getSymbolFromCode } from 'currency-code-symbol-map';
import type { CurrencyCode } from '../../../../node_modules/currency-code-symbol-map/lib/currencyCodeSymbolMapping';

import * as S from './style';
interface IObject {
  [key: string]: number;
}

const Charts = () => {
  const { paymentDetails } = React.useContext(PaymentContext);
  const { categories } = React.useContext(CategoriesContext);
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

  const arrayCategoriesChart = () => {
    const categoriesMapped: string[] = [];
    categories.map(({ name }) => {
      categoriesMapped.push(name);
    });
    return categoriesMapped;
  };

  const categoriesDateArray = arrayCategoriesChart();
  const categoriesDataChart = (dataBase: any[], categoriesData: any, paymentType: any) => {
    const categoriesArray = [...Array(categoriesData.length).fill(0)];
    categoriesData.map((category: string, index: number) => {
      dataBase.map((data: { paymentType: string; category: string; amount: string; cancelled: boolean }) => {
        if (paymentType === data.paymentType && !data.cancelled) {
          if (category === data.category)
            return (categoriesArray[index] = parseInt(currencyChecker(currency, data.amount)));
        } else if (data.cancelled && paymentType === 'Cancelled') {
          if (category === data.category)
            return (categoriesArray[index] = parseInt(currencyChecker(currency, data.amount)));
        }
      });
    });
    return categoriesArray;
  };

  const incomeDataChart = (dataBase: any[]) => {
    let month = 0;
    const newData = [...Array(12).fill(0)];

    dataBase.map((data: { paymentType: string; cancelled: any; date: string | number | Date; amount: string }) => {
      if (data.paymentType === 'Income' && !data.cancelled) {
        month = getTime(data.date);
        newData[month] += parseInt(currencyChecker(currency, data.amount));
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
        newData[month] += parseInt(currencyChecker(currency, data.amount));
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
        newData[month] += parseInt(currencyChecker(currency, data.amount));
      }
    });

    return newData;
  };

  const lineChartSeries = [
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

  const lineChartOptions = {
    chart: {
      type: 'line',
      redrawOnParentResize: true,
      redrawOnWindowResize: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ['#5acaf7', '#4333a0', '#ff8789'],

    dataLabels: {
      enabled: true,
      formatter: (val: string) => {
        return getSymbolFromCode(currency as CurrencyCode) + ' ' + numberWithCommas(currencyChecker(currency, val));
      },
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Payment Summary',
      align: 'left',
      style: {
        fontSize: '25px',
      },
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

      title: {
        text: 'Month',
      },
    },
    yaxis: {
      title: {
        text: 'Money',
      },
      labels: {
        formatter: (val: string) => {
          return getSymbolFromCode(currency as CurrencyCode) + ' ' + numberWithCommas(currencyChecker(currency, val));
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5,
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

  const barChartSeries = [
    {
      name: 'Revenue',
      data: categoriesDataChart(paymentDetails, categoriesDateArray, 'Income'),
    },
    {
      name: 'Outgoing',
      data: categoriesDataChart(paymentDetails, categoriesDateArray, 'Expenses'),
    },
    {
      name: 'Canceled',
      data: categoriesDataChart(paymentDetails, categoriesDateArray, 'Cancelled'),
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
      text: 'Payment By Category',
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
      categories: categoriesDateArray,
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

  return (
    <S.ChartsWrapper>
      <S.MobileMessage>Better View on Desktop or Tablet ...</S.MobileMessage>
      <S.PaymentChartWrapper>
        <Chart options={lineChartOptions} series={lineChartSeries} type="line" height={300} />
      </S.PaymentChartWrapper>

      <S.PaymentChartWrapper>
        <Chart options={barChartOptions} series={barChartSeries} type="bar" height={300} />
      </S.PaymentChartWrapper>
    </S.ChartsWrapper>
  );
};
export default Charts;
