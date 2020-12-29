import React, { FC } from 'react';
import { Typography } from '../../atoms';
import * as S from './style';

const Card: FC = () => {
  return (
    <>
      <S.Card>
        <Typography.CardTitle />
        <S.CardNumberWrapper>
          <Typography.CardNumber>**** **** **** 6857</Typography.CardNumber>
        </S.CardNumberWrapper>

        <S.CardDetailsWrapper>
          <div>
            <Typography.CardHolderTitle />
            <Typography.CardHolderName>Ian Kelley</Typography.CardHolderName>
          </div>
          <div>
            <Typography.CardValidThruTitle />
            <Typography.CardValidDateNumber>04 / 21</Typography.CardValidDateNumber>
          </div>
        </S.CardDetailsWrapper>
      </S.Card>
    </>
  );
};

export default Card;
