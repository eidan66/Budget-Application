import React, { FC } from 'react';
import { Icon, Typography } from '../../atoms';
import * as S from './style';

interface IPaymentHistory {
  paymentDetail?: string;
  paymentDate?: string;
  paymentNumber?: string;
  paymentCurrency?: string;
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
}

export interface IPaymentHistoryProps {
  [property: string]: FC<IPaymentHistory>;
}

const PaymentHistory: IPaymentHistoryProps = {
  Cancelled: ({ paymentDetail, paymentDate, paymentNumber, paymentCurrency, color }) => (
    <S.PaymentHistoryWrapper>
      <S.PaymentIconWrapper>
        <Icon.Cancelled />
      </S.PaymentIconWrapper>

      <S.PaymentTypographyWrapper>
        <S.PaymentDetailsWrapper>
          <Typography.ExtraSmallText>{paymentDetail}</Typography.ExtraSmallText>
          <Typography.SmallText variant="subtitle2">{paymentDate}</Typography.SmallText>
        </S.PaymentDetailsWrapper>

        <S.PaymentWrapper>
          <Typography.SubtitleText color={color}>{paymentNumber}</Typography.SubtitleText>
          <Typography.UppercaseText>{paymentCurrency}</Typography.UppercaseText>
        </S.PaymentWrapper>
      </S.PaymentTypographyWrapper>
    </S.PaymentHistoryWrapper>
  ),
  Paypal: ({ paymentDetail, paymentDate, paymentNumber, paymentCurrency, color }) => (
    <S.PaymentHistoryWrapper>
      <S.PaymentIconWrapper>
        <Icon.Paypal />
      </S.PaymentIconWrapper>

      <S.PaymentTypographyWrapper>
        <S.PaymentDetailsWrapper>
          <Typography.ExtraSmallText>{paymentDetail}</Typography.ExtraSmallText>
          <Typography.SmallText variant="subtitle2">{paymentDate}</Typography.SmallText>
        </S.PaymentDetailsWrapper>

        <S.PaymentWrapper>
          <Typography.SubtitleText color={color}>{paymentNumber}</Typography.SubtitleText>
          <Typography.UppercaseText>{paymentCurrency}</Typography.UppercaseText>
        </S.PaymentWrapper>
      </S.PaymentTypographyWrapper>
    </S.PaymentHistoryWrapper>
  ),
  Income: ({ paymentDetail, paymentDate, paymentNumber, paymentCurrency, color }) => (
    <S.PaymentHistoryWrapper>
      <S.PaymentIconWrapper>
        <Icon.Income color="#3c8c30" />
      </S.PaymentIconWrapper>

      <S.PaymentTypographyWrapper>
        <S.PaymentDetailsWrapper>
          <Typography.ExtraSmallText>{paymentDetail}</Typography.ExtraSmallText>
          <Typography.SmallText variant="subtitle2">{paymentDate}</Typography.SmallText>
        </S.PaymentDetailsWrapper>

        <S.PaymentWrapper>
          <Typography.SubtitleText color={color}>{paymentNumber}</Typography.SubtitleText>
          <Typography.UppercaseText>{paymentCurrency}</Typography.UppercaseText>
        </S.PaymentWrapper>
      </S.PaymentTypographyWrapper>
    </S.PaymentHistoryWrapper>
  ),
};

export default PaymentHistory;
