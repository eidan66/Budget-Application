/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';
import { IPayment } from '../../interfaces/context';

export const initialState = {
  paymentDetails: [],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setPaymentDetails: () => {},
};

export const PaymentContext = createContext<IPayment>(initialState);
