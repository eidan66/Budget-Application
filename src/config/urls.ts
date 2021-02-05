/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
  currency: {
    base: 'https://api.exchangeratesapi.io',
    currencyList: (query: string) => `/latest?base=${query}`,
  },
  budget: {
    base: 'tempURL',
    userDetails: () => ``,
  },
};
