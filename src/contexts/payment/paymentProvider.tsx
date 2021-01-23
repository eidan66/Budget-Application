import React from 'react';
import { PAYMENT_ACTION } from '../actionContext';
import { paymentReducer } from '../reducerContext';
import { PaymentContext, initialState } from './paymentContext';

export const PaymentContextProvide = (props: any) => {
  const [state, dispatch] = React.useReducer(paymentReducer, initialState);

  const setPaymentDetails = (paymentDetails: any) => {
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
      {props.children}
    </PaymentContext.Provider>
  );
};
