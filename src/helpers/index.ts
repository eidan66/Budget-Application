export const dateSorting = (a, b) => {
  const sortByDate = new Date(a.date).getTime() - new Date(b.date).getTime();
  console.log('sortByDate ~ ', sortByDate);
  if (sortByDate === 0) {
    //   TODO: Fix this helper function!!
    console.log(new Date(a.time));
  }
};

export const numberWithCommas = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const amountColorPicker = ({ paymentType }) => (paymentType === 'Expenses' ? 'error' : 'primary');

export const summaryColor = (summary) => (summary === 'Income' ? '#3c8c30' : '#ff0000');

export const titleChecker = (summary) => (summary === 'Income' ? 'Revenue' : 'Outgoings');

export const getTime = (date) => new Date(date).getMonth();
