import React, { FC } from 'react';
import { Typography } from '../../atoms';
import * as S from './style';

interface ICard {
  cardNumber: string;
  cardHolderName: string;
  cardDate: string;
}

const Card: FC<ICard> = ({ cardNumber, cardHolderName, cardDate }) => {
  return (
    <>
      <S.Card>
        <Typography.CardTitle />
        <S.CardNumberWrapper>
          <Typography.CardNumber>{cardNumber}</Typography.CardNumber>
        </S.CardNumberWrapper>

        <S.CardDetailsWrapper>
          <S.CardHolderWrapper>
            <Typography.CardHolderTitle />
            <Typography.CardHolderName>{cardHolderName}</Typography.CardHolderName>
          </S.CardHolderWrapper>

          <S.CardDateWrapper>
            <Typography.CardValidThruTitle />
            <Typography.CardValidDateNumber>{cardDate}</Typography.CardValidDateNumber>
          </S.CardDateWrapper>
        </S.CardDetailsWrapper>
      </S.Card>
    </>
  );
};

export default Card;
