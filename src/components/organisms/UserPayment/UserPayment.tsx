import { FC, useContext } from 'react';
import { Typography } from '../../atoms';
import { UserDetailsBox, PaymentHistory } from '../../molecules';
import { numberWithCommas, amountColorPicker } from '../../../helpers';
import * as S from './style';
import useLocalStorage from './../../../hooks/useLocalStorage';

import { PaymentContext } from '../../../contexts/payment/paymentContext';
import { AppContext } from '../../../contexts/app/appContext';
import { IPaymentDetails } from './../../../interfaces/context';

interface IUserPaymentProps {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
}

const UserPayment: FC<IUserPaymentProps> = ({ first_name, last_name, email, avatar }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currencyList, setCurrencyList] = useLocalStorage('currencyList', []);
  const { paymentDetails } = useContext(PaymentContext);
  const { currency } = useContext(AppContext);

  const currencyChecker = (paymentCurrency: string, paymentAmount: string) => {
    let rate = 1;
    Object.keys(currencyList).map((item) => {
      if (item === paymentCurrency) {
        rate = currencyList[item] * parseInt(paymentAmount);
      }
    });

    return rate.toFixed(0);
  };

  const userPaymentRender = (payments: IPaymentDetails[]) => {
    return payments
      .slice(0, 10)
      .map(
        (payment: {
          cancelled: boolean;
          date: string;
          time: string;
          amount: string;
          currency: string;
          id: string;
          paymentMethod: string;
          paymentType: string;
        }) => {
          return payment.cancelled ? (
            <PaymentHistory.Cancelled
              paymentDate={payment.date + ' ' + payment.time}
              paymentNumber={numberWithCommas(currencyChecker(payment.currency, payment.amount))}
              paymentCurrency={currency}
              key={payment.id}
            />
          ) : payment.paymentMethod === 'paypal' ? (
            <PaymentHistory.Paypal
              paymentDate={payment.date + ' ' + payment.time}
              paymentNumber={numberWithCommas(currencyChecker(payment.currency, payment.amount))}
              paymentCurrency={currency}
              color={amountColorPicker(payment)}
              key={payment.id}
            />
          ) : payment.paymentType === 'Income' && payment.paymentMethod === 'credit card' ? (
            <PaymentHistory.Income
              paymentDate={payment.date + ' ' + payment.time}
              paymentNumber={numberWithCommas(currencyChecker(payment.currency, payment.amount))}
              paymentCurrency={currency}
              color={amountColorPicker(payment)}
              key={payment.id}
            />
          ) : payment.paymentType === 'Expenses' && payment.paymentMethod === 'credit card' ? (
            <PaymentHistory.Expense
              paymentDate={payment.date + ' ' + payment.time}
              paymentNumber={numberWithCommas(currencyChecker(payment.currency, payment.amount))}
              paymentCurrency={currency}
              color={amountColorPicker(payment)}
              key={payment.id}
            />
          ) : (
            ''
          );
        }
      );
  };

  return (
    <S.UserPaymentWrapper>
      <S.UserDetailsWrapper>
        <UserDetailsBox first_name={first_name} last_name={last_name} email={email} avatar={avatar} />
      </S.UserDetailsWrapper>
      <S.PaymentTitleWrapper>
        <Typography.MediumText color="primary">Payment history</Typography.MediumText>
      </S.PaymentTitleWrapper>
      <S.UserPaymentHistoryWrapper>{userPaymentRender(paymentDetails)}</S.UserPaymentHistoryWrapper>
    </S.UserPaymentWrapper>
  );
};

export default UserPayment;
