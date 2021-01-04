import React, { FC } from 'react';
import * as S from './style';
import { Avatar, Typography, Icon } from '../../atoms';

interface IExpensesDetailsProps {
  business: string;
  name: string;
  time: string;
  date: string;
  avatarSrc: string;
}

const ExpensesDetails: FC<IExpensesDetailsProps> = ({ business, name, time, date, avatarSrc }) => {
  return (
    <S.ExpensesDetailsWrapper>
      <S.AvatarWrapper>
        <Avatar avatarName={name} avatar={avatarSrc} />
      </S.AvatarWrapper>

      <S.InformationWrapper>
        <S.TitleWrapper>
          <Typography.MediumText color="primary">{business}</Typography.MediumText>
        </S.TitleWrapper>

        <S.NameWrapper>
          <Icon.Person />
          <Typography.SmallText variant="subtitle2">{name}</Typography.SmallText>
        </S.NameWrapper>

        <S.TimeInfoWrapper>
          <S.TimeWrapper>
            <Icon.Clock />
            <Typography.SmallText variant="subtitle2">{time}</Typography.SmallText>
          </S.TimeWrapper>

          <S.DateWrapper>
            <Icon.TimeDate />
            <Typography.SmallText variant="subtitle2">{date}</Typography.SmallText>
          </S.DateWrapper>
        </S.TimeInfoWrapper>
      </S.InformationWrapper>
    </S.ExpensesDetailsWrapper>
  );
};

export default ExpensesDetails;
