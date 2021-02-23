import React from 'react';
import { IPaymentDetails } from '../../interfaces/context';
import { PAYMENT_ACTION } from '../actionContext';
import { paymentReducer } from '../reducerContext';
import { PaymentContext, initialState } from './paymentContext';

interface IChildren {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const PaymentContextProvide = ({ children }: IChildren) => {
  const [state, dispatch] = React.useReducer(paymentReducer, initialState);

  const setPaymentDetails = (paymentDetails: IPaymentDetails) => {
    ``;
    dispatch({
      type: PAYMENT_ACTION.SET_PAYMENT_DETAILS,
      payload: paymentDetails,
    });
  };

  return (
    <PaymentContext.Provider
      value={{
        ...state,
        setPaymentDetails,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
