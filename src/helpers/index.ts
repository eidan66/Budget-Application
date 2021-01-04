export const dateSorting = (a, b) => {
  const sortByDate = new Date(a.date).getTime() - new Date(b.date).getTime();
  console.log('sortByDate ~ ', sortByDate);
  if (sortByDate === 0) {
    //   TODO: Fix this helper function!!
    console.log(new Date(a.time));
  }
};

export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const amountColorPicker = ({ paymentType }) => {
  return paymentType === 'Expenses' ? 'error' : 'primary';
};
