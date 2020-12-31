import React, { FC } from 'react';
import { Typography } from '../../atoms';
import * as S from './style';

interface ICardProps {
  cardNumber: string;
  cardHolderName: string;
  cardDate: string;
}

const Card: FC<ICardProps> = ({ cardNumber, cardHolderName, cardDate }) => {
  return (
    <>
      <S.Card>
        <Typography.MediumText>Card</Typography.MediumText>
        <S.CardNumberWrapper>
          <Typography.LargeText>{cardNumber}</Typography.LargeText>
        </S.CardNumberWrapper>

        <S.CardDetailsWrapper>
          <S.CardHolderWrapper>
            <Typography.UppercaseText>card holder</Typography.UppercaseText>
            <Typography.SmallText variant="subtitle1">{cardHolderName}</Typography.SmallText>
          </S.CardHolderWrapper>

          <S.CardDateWrapper>
            <Typography.UppercaseText>valid thru</Typography.UppercaseText>
            <Typography.SmallText variant="subtitle1">{cardDate}</Typography.SmallText>
          </S.CardDateWrapper>
        </S.CardDetailsWrapper>
      </S.Card>
    </>
  );
};

export default Card;
