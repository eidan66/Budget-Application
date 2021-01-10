import React, { FC } from 'react';
import * as S from './style';
import { Avatar, Typography, Icon } from '../../atoms';

const forMapInformation = (flag, location) => {
  return flag ? (
    <S.MapWrapper>
      <Icon.Location />
      <Typography.SmallText variant="subtitle2">{location}</Typography.SmallText>
    </S.MapWrapper>
  ) : (
    ''
  );
};

interface IExpensesDetailsProps {
  business: string;
  first_name: string;
  last_name: string;
  time: string;
  date: string;
  avatarSrc: string;
  map?: boolean;
  country?: string;
  city?: string;
  street?: string;
}

const ExpensesDetails: FC<IExpensesDetailsProps> = ({
  business,
  first_name,
  last_name,
  time,
  date,
  avatarSrc,
  map,
  country,
  city,
  street,
}) => {
  const location = country + ', ' + city + ', ' + street + '.';
  return (
    <S.ExpensesDetailsWrapper>
      <S.AvatarWrapper>
        <Avatar avatarName={first_name + ' ' + last_name} avatar={avatarSrc} />
      </S.AvatarWrapper>

      <S.InformationWrapper>
        <S.TitleWrapper>
          <Typography.MediumText color="primary">{business}</Typography.MediumText>
        </S.TitleWrapper>

        <S.NameWrapper>
          <Icon.Person />
          <Typography.SmallText variant="subtitle2">{first_name + ' ' + last_name}</Typography.SmallText>
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

        {forMapInformation(map, location)}
      </S.InformationWrapper>
    </S.ExpensesDetailsWrapper>
  );
};

export default ExpensesDetails;
