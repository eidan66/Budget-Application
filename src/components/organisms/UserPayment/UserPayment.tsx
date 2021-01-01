import React, { FC } from 'react';
import { Typography } from '../../atoms';
import { UserDetailsBox, PaymentHistory } from '../../molecules';
import * as S from './style';

interface IUserPaymentProps {
  userName: string;
  userEmail: string;
  src: string;
  paymentDetail?: string;
  paymentDate?: string;
  paymentNumber?: string;
  paymentCurrency?: string;
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
}

const UserPayment: FC<IUserPaymentProps> = ({
  userName,
  userEmail,
  src,
  paymentDetail,
  paymentDate,
  paymentNumber,
  paymentCurrency,
  color,
}) => {
  return (
    <S.UserPaymentWrapper>
      <S.UserDetailsWrapper>
        <UserDetailsBox userName={userName} userEmail={userEmail} src={src} />
      </S.UserDetailsWrapper>
      <S.PaymentTitleWrapper>
        <Typography.MediumText color="primary">Payment history</Typography.MediumText>
      </S.PaymentTitleWrapper>
      <S.UserPaymentHistoryWrapper>
        <PaymentHistory.Paypal
          paymentDetail={paymentDetail}
          paymentDate={paymentDate}
          paymentNumber={paymentNumber}
          paymentCurrency={paymentCurrency}
          color={color}
        />
        <PaymentHistory.Income
          paymentDetail={paymentDetail}
          paymentDate={paymentDate}
          paymentNumber={paymentNumber}
          paymentCurrency={paymentCurrency}
          color={color}
        />
        <PaymentHistory.Cancelled
          paymentDetail={paymentDetail}
          paymentDate={paymentDate}
          paymentNumber={paymentNumber}
          paymentCurrency={paymentCurrency}
          color={color}
        />
        <PaymentHistory.Paypal
          paymentDetail={paymentDetail}
          paymentDate={paymentDate}
          paymentNumber={paymentNumber}
          paymentCurrency={paymentCurrency}
          color={color}
        />
        <PaymentHistory.Income
          paymentDetail={paymentDetail}
          paymentDate={paymentDate}
          paymentNumber={paymentNumber}
          paymentCurrency={paymentCurrency}
          color={color}
        />
        <PaymentHistory.Paypal
          paymentDetail={paymentDetail}
          paymentDate={paymentDate}
          paymentNumber={paymentNumber}
          paymentCurrency={paymentCurrency}
          color={color}
        />
        <PaymentHistory.Income
          paymentDetail={paymentDetail}
          paymentDate={paymentDate}
          paymentNumber={paymentNumber}
          paymentCurrency={paymentCurrency}
          color={color}
        />
        <PaymentHistory.Paypal
          paymentDetail={paymentDetail}
          paymentDate={paymentDate}
          paymentNumber={paymentNumber}
          paymentCurrency={paymentCurrency}
          color={color}
        />
        <PaymentHistory.Income
          paymentDetail={paymentDetail}
          paymentDate={paymentDate}
          paymentNumber={paymentNumber}
          paymentCurrency={paymentCurrency}
          color={color}
        />
      </S.UserPaymentHistoryWrapper>
    </S.UserPaymentWrapper>
  );
};

export default UserPayment;
