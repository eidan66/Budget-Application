/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */

export const compareFunction = (elmA: { date: string; time: string }, elmB: { date: string; time: string }) => {
  const partsOfTimeA = elmA.time.split(' ');
  const partsTwoOfTimeA = partsOfTimeA[0].split(':');
  const partsOfTimeAMPM_A = ampmFunction(parseInt(partsTwoOfTimeA[0]), partsOfTimeA[1]);
  const comparableTimeA = `${partsOfTimeAMPM_A.padStart(2, '0')}${partsTwoOfTimeA[1].padStart(2, '0')}`;

  const partsOfTimeB = elmB.time.split(' ');
  const partsTwoOfTimeB = partsOfTimeB[0].split(':');
  const partsOfTimeAMPM_B = ampmFunction(parseInt(partsTwoOfTimeB[0]), partsOfTimeB[1]);
  const comparableTimeB = `${partsOfTimeAMPM_B.padStart(2, '0')}${partsTwoOfTimeB[1].padStart(2, '0')}`;

  const partsOfDateA = elmA.date.split('/');
  const comparableDateA = `${partsOfDateA[2]}-${partsOfDateA[0].padStart(2, '0')}-${partsOfDateA[1].padStart(2, '0')}`;

  const partsOfDateB = elmB.date.split('/');
  const comparableDateB = `${partsOfDateB[2]}-${partsOfDateB[0].padStart(2, '0')}-${partsOfDateB[1].padStart(2, '0')}`;

  return comparableDateA > comparableDateB
    ? -1
    : comparableDateA < comparableDateB
    ? 1
    : comparableDateA == comparableDateB
    ? comparableTimeA < comparableTimeB
      ? -1
      : comparableTimeA > comparableTimeB
      ? 1
      : 0
    : 0;
};

export const ampmFunction = (time: number, ampm: string) => {
  const am = time;
  const pm = time + 12;
  return ampm === 'PM' ? `${pm}` : `${am}`;
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
