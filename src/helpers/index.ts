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
