/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';
import { IPayment } from '../../interfaces/context';

export const initialState = {
  paymentDetails: [],
  setPaymentDetails: () => {},
};

export const PaymentContext = createContext<IPayment>(initialState);
