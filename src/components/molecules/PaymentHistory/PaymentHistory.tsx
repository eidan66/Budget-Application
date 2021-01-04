import React, { FC } from 'react';
import { Icon, Typography } from '../../atoms';
import * as S from './style';

interface IPaymentHistory {
  paymentDate?: string;
  paymentNumber?: string;
  paymentCurrency?: string;
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
}

export interface IPaymentHistoryProps {
  [property: string]: FC<IPaymentHistory>;
}
// change it like in navbar - they are all the same except of icon
const PaymentHistory: IPaymentHistoryProps = {
  Cancelled: ({ paymentDate, paymentNumber, paymentCurrency, color }) => (
    <S.PaymentHistoryWrapper>
      <S.PaymentIconWrapper>
        <Icon.Cancelled />
      </S.PaymentIconWrapper>

      <S.PaymentTypographyWrapper>
        <S.PaymentDetailsWrapper>
          <Typography.ExtraSmallText color={color}>Cancelled</Typography.ExtraSmallText>
          <Typography.SmallText variant="subtitle2">{paymentDate}</Typography.SmallText>
        </S.PaymentDetailsWrapper>

        <S.PaymentWrapper>
          <Typography.SubtitleText color={color}>{paymentNumber}</Typography.SubtitleText>
          <Typography.UppercaseText>{paymentCurrency}</Typography.UppercaseText>
        </S.PaymentWrapper>
      </S.PaymentTypographyWrapper>
    </S.PaymentHistoryWrapper>
  ),
  Paypal: ({ paymentDate, paymentNumber, paymentCurrency, color }) => (
    <S.PaymentHistoryWrapper>
      <S.PaymentIconWrapper>
        <Icon.Paypal />
      </S.PaymentIconWrapper>

      <S.PaymentTypographyWrapper>
        <S.PaymentDetailsWrapper>
          <Typography.ExtraSmallText>Deposit Paypal</Typography.ExtraSmallText>
          <Typography.SmallText variant="subtitle2">{paymentDate}</Typography.SmallText>
        </S.PaymentDetailsWrapper>

        <S.PaymentWrapper>
          <Typography.SubtitleText color={color}>{paymentNumber}</Typography.SubtitleText>
          <Typography.UppercaseText>{paymentCurrency}</Typography.UppercaseText>
        </S.PaymentWrapper>
      </S.PaymentTypographyWrapper>
    </S.PaymentHistoryWrapper>
  ),
  Income: ({ paymentDate, paymentNumber, paymentCurrency, color }) => (
    <S.PaymentHistoryWrapper>
      <S.PaymentIconWrapper>
        <Icon.Income />
      </S.PaymentIconWrapper>

      <S.PaymentTypographyWrapper>
        <S.PaymentDetailsWrapper>
          <Typography.ExtraSmallText>Deposit from ATL</Typography.ExtraSmallText>
          <Typography.SmallText variant="subtitle2">{paymentDate}</Typography.SmallText>
        </S.PaymentDetailsWrapper>

        <S.PaymentWrapper>
          <Typography.SubtitleText color={color}>{paymentNumber}</Typography.SubtitleText>
          <Typography.UppercaseText>{paymentCurrency}</Typography.UppercaseText>
        </S.PaymentWrapper>
      </S.PaymentTypographyWrapper>
    </S.PaymentHistoryWrapper>
  ),
  Expense: ({ paymentDate, paymentNumber, paymentCurrency, color }) => (
    <S.PaymentHistoryWrapper>
      <S.PaymentIconWrapper>
        <Icon.Expense />
      </S.PaymentIconWrapper>

      <S.PaymentTypographyWrapper>
        <S.PaymentDetailsWrapper>
          <Typography.ExtraSmallText>Deposit from ATL</Typography.ExtraSmallText>
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
