import React, { FC } from 'react';
import { Typography } from '../../atoms';
import { UserDetailsBox, PaymentHistory } from '../../molecules';
import dataBase from '../../../mockup-tests/smallmockup.json';
import * as S from './style';
import { numberWithCommas, amountColorPicker, dateSorting } from '../../../helpers';

const userPaymentRendered = (payments) => {
  payments.sort(dateSorting);
  let keyNumber = 0;
  return payments.map((payment) => {
    keyNumber++;
    return payment.paypal ? (
      <PaymentHistory.Paypal
        paymentDate={payment.date + ' ' + payment.time}
        paymentNumber={numberWithCommas(payment.amount)}
        paymentCurrency={payment.currency}
        color={amountColorPicker(payment.amount)}
        key={keyNumber}
      />
    ) : payment.transactionType === 'cancelled' ? (
      <PaymentHistory.Cancelled
        paymentDate={payment.date + ' ' + payment.time}
        paymentNumber={numberWithCommas(payment.amount)}
        paymentCurrency={payment.currency}
        color={amountColorPicker(payment.amount)}
        key={keyNumber}
      />
    ) : payment.transactionType === 'Income' ? (
      <PaymentHistory.Income
        paymentDate={payment.date + ' ' + payment.time}
        paymentNumber={numberWithCommas(payment.amount)}
        paymentCurrency={payment.currency}
        color={amountColorPicker(payment.amount)}
        key={keyNumber}
      />
    ) : (
      ''
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
      <S.UserPaymentHistoryWrapper>{userPaymentRendered(dataBase.slice(0, 10))}</S.UserPaymentHistoryWrapper>
    </S.UserPaymentWrapper>
  );
};

export default UserPayment;
