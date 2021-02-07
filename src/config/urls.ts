/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
  currency: {
    base: 'https://api.exchangeratesapi.io',
    currencyList: (query: string) => `/latest?base=${query}`,
  },
  transaction: {
    base: 'https://my.api.mockaroo.com',
    transactionsList: () => `/transactions.json?key=${process.env.REACT_APP_TRANSACTION_KEY}`,
  },
};
