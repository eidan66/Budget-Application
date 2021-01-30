import React, { FC } from 'react';
import { Typography } from '../../atoms';
import * as S from './style';

interface ICardProps {
  last4Digits: number;
  first_name: string;
  last_name: string;
  exp_year: number;
  exp_month: number;
}

const Card: FC<ICardProps> = ({ last4Digits, first_name, last_name, exp_year, exp_month }) => {
  return (
    <>
      <S.Card>
        <Typography.MediumText>Card</Typography.MediumText>
        <S.CardNumberWrapper>
          <Typography.LargeText>{'**** **** **** ' + last4Digits}</Typography.LargeText>
        </S.CardNumberWrapper>

        <S.CardDetailsWrapper color=" #FFDF32">
          <S.CardHolderWrapper>
            <Typography.UppercaseText>card holder</Typography.UppercaseText>
            <Typography.SmallText variant="subtitle1">{first_name + ' ' + last_name}</Typography.SmallText>
          </S.CardHolderWrapper>

          <S.CardDateWrapper>
            <Typography.UppercaseText>valid thru</Typography.UppercaseText>
            <Typography.SmallText variant="subtitle1">{exp_month + ' / ' + exp_year}</Typography.SmallText>
          </S.CardDateWrapper>
        </S.CardDetailsWrapper>
      </S.Card>
    </>
  );
};

export default Card;
