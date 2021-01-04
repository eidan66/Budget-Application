import React, { FC } from 'react';
import { Typography } from '../../atoms';
import { UserDetailsBox, PaymentHistory } from '../../molecules';
import dataBase from '../../../mockup-tests/smallmockup.json';
import { numberWithCommas, amountColorPicker } from '../../../helpers';
import * as S from './style';

const userPaymentRender = (payments) => {
  let keyNumber = 0;
  return payments.map((payment) => {
    keyNumber++;
    return payment.cancelled ? (
      <PaymentHistory.Cancelled
        paymentDate={payment.date + ' ' + payment.time}
        paymentNumber={numberWithCommas(payment.amount)}
        paymentCurrency={payment.currency}
        key={keyNumber}
      />
    ) : payment.paymentMethod === 'paypal' ? (
      <PaymentHistory.Paypal
        paymentDate={payment.date + ' ' + payment.time}
        paymentNumber={numberWithCommas(payment.amount)}
        paymentCurrency={payment.currency}
        color={amountColorPicker(payment)}
        key={keyNumber}
      />
    ) : payment.paymentType === 'Income' && payment.paymentMethod === 'credit card' ? (
      <PaymentHistory.Income
        paymentDate={payment.date + ' ' + payment.time}
        paymentNumber={numberWithCommas(payment.amount)}
        paymentCurrency={payment.currency}
        color={amountColorPicker(payment)}
        key={keyNumber}
      />
    ) : payment.paymentType === 'Expenses' && payment.paymentMethod === 'credit card' ? (
      <PaymentHistory.Expense
        paymentDate={payment.date + ' ' + payment.time}
        paymentNumber={numberWithCommas(payment.amount)}
        paymentCurrency={payment.currency}
        color={amountColorPicker(payment)}
        key={keyNumber}
      />
    ) : (
      <p>Test</p>
    );
  });
};

interface IUserPaymentProps {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
}

const UserPayment: FC<IUserPaymentProps> = ({ first_name, last_name, email, avatar }) => {
  return (
    <S.UserPaymentWrapper>
      <S.UserDetailsWrapper>
        <UserDetailsBox first_name={first_name} last_name={last_name} email={email} avatar={avatar} />
      </S.UserDetailsWrapper>
      <S.PaymentTitleWrapper>
        <Typography.MediumText color="primary">Payment history</Typography.MediumText>
      </S.PaymentTitleWrapper>
      <S.UserPaymentHistoryWrapper>{userPaymentRender(dataBase.slice(0, 10))}</S.UserPaymentHistoryWrapper>
    </S.UserPaymentWrapper>
  );
};

export default UserPayment;
