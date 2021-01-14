/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */

export const compareFunction = (elmA: { date: string }, elmB: { date: string }) => {
  const partsOfDateA = elmA.date.split('/');
  const comparableDateA = `${partsOfDateA[2]}-${partsOfDateA[0].padStart(2, '0')}-${partsOfDateA[1].padStart(2, '0')}`;

  const partsOfDateB = elmB.date.split('/');
  const comparableDateB = `${partsOfDateB[2]}-${partsOfDateB[0].padStart(2, '0')}-${partsOfDateB[1].padStart(2, '0')}`;

  if (comparableDateA > comparableDateB) {
    return -1;
  }
  if (comparableDateA < comparableDateB) {
    return 1;
  }
  return 0;
};

export const numberWithCommas = (number: string): string => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const amountColorPicker = (type: { paymentType: string }) =>
  type.paymentType === 'Expenses' ? 'error' : 'primary';

export const summaryColor = (summary: string) => (summary === 'Income' ? '#3c8c30' : '#ff0000');

export const titleChecker = (summary: string) => (summary === 'Income' ? 'Revenue' : 'Outgoings');

export const getTime = (date: string | number | Date) => new Date(date).getMonth();

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
