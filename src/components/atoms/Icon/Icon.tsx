import React, { FC } from 'react';
import Paypal from './Paypal';
import * as S from './style';
import * as MatIcon from '@material-ui/icons';

interface IIcon {
  [property: string]: FC;
}

const Icon: IIcon = {
  Canceled: () => (
    <S.IconContainer>
      <MatIcon.Cancel htmlColor="red" />
    </S.IconContainer>
  ),
  Paypal: () => (
    <S.IconContainer>
      <Paypal color="gray" />
    </S.IconContainer>
  ),
  Income: () => (
    <S.IconContainer>
      <MatIcon.TrendingUp htmlColor="gray" />
    </S.IconContainer>
  ),
  Dashboard: () => (
    <S.IconContainer>
      <MatIcon.Dashboard htmlColor="gray" />
    </S.IconContainer>
  ),
  Charts: () => (
    <S.IconContainer>
      <MatIcon.PieChart htmlColor="gray" />
    </S.IconContainer>
  ),
  Cards: () => (
    <S.IconContainer>
      <MatIcon.Payment htmlColor="gray" />
    </S.IconContainer>
  ),
  Calendar: () => (
    <S.IconContainer>
      <MatIcon.CalendarToday htmlColor="gray" />
    </S.IconContainer>
  ),
  Messages: () => (
    <S.IconContainer>
      <MatIcon.MailOutline htmlColor="gray" />
    </S.IconContainer>
  ),
  User: () => (
    <S.IconContainer>
      <MatIcon.Person htmlColor="gray" />
    </S.IconContainer>
  ),
  Settings: () => (
    <S.IconContainer>
      <MatIcon.Settings htmlColor="gray" />
    </S.IconContainer>
  ),
};

export default Icon;
