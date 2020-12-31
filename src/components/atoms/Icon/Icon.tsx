import React, { FC } from 'react';
import Paypal from './Paypal';
import * as S from './style';
import * as MatIcon from '@material-ui/icons';

interface IIcon {
  color?: string | '#C5C0E5';
}
interface IIconProps {
  [property: string]: FC<IIcon>;
}

const Icon: IIconProps = {
  Canceled: () => (
    <S.IconContainer>
      <MatIcon.Cancel htmlColor="red" />
    </S.IconContainer>
  ),
  Paypal: () => (
    <S.IconContainer>
      <Paypal color="#3b7bbf " />
    </S.IconContainer>
  ),
  Income: ({ color }) => (
    <S.IconContainer>
      <MatIcon.TrendingUp htmlColor={color} />
    </S.IconContainer>
  ),
  Dashboard: ({ color = '#C5C0E5' }) => (
    <S.IconContainer>
      <MatIcon.Dashboard htmlColor={color} />
    </S.IconContainer>
  ),
  Charts: ({ color = '#C5C0E5' }) => (
    <S.IconContainer>
      <MatIcon.PieChart htmlColor={color} />
    </S.IconContainer>
  ),
  Cards: ({ color = '#C5C0E5' }) => (
    <S.IconContainer>
      <MatIcon.Payment htmlColor={color} />
    </S.IconContainer>
  ),
  Calendar: ({ color = '#C5C0E5' }) => (
    <S.IconContainer>
      <MatIcon.CalendarToday htmlColor={color} />
    </S.IconContainer>
  ),
  Messages: ({ color = '#C5C0E5' }) => (
    <S.IconContainer>
      <MatIcon.MailOutline htmlColor={color} />
    </S.IconContainer>
  ),
  User: ({ color = '#C5C0E5' }) => (
    <S.IconContainer>
      <MatIcon.Person htmlColor={color} />
    </S.IconContainer>
  ),
  Settings: ({ color = '#C5C0E5' }) => (
    <S.IconContainer>
      <MatIcon.Settings htmlColor={color} />
    </S.IconContainer>
  ),
};

export default Icon;
