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
  Cancelled: () => (
    <S.IconContainer>
      <MatIcon.Cancel htmlColor="red" fontSize="large" />
    </S.IconContainer>
  ),
  Paypal: () => (
    <S.IconContainer>
      <Paypal color="#3b7bbf " fontSize="2.1875rem" />
    </S.IconContainer>
  ),
  Income: () => (
    <S.IconContainer>
      <MatIcon.TrendingUp htmlColor="#3c8c30" fontSize="large" />
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
  Expense: () => (
    <S.IconContainer>
      <MatIcon.TrendingDown htmlColor="#ff0000" fontSize="large" />
    </S.IconContainer>
  ),
  Person: ({ color = '#C5C0E5' }) => (
    <S.IconContainer>
      <MatIcon.EmojiPeople htmlColor={color} />
    </S.IconContainer>
  ),
  Clock: ({ color = '#C5C0E5' }) => (
    <S.IconContainer>
      <MatIcon.QueryBuilderSharp htmlColor={color} />
    </S.IconContainer>
  ),
  TimeDate: ({ color = '#C5C0E5' }) => (
    <S.IconContainer>
      <MatIcon.DateRangeOutlined htmlColor={color} />
    </S.IconContainer>
  ),
  Circle: ({ color = '#C5C0E5' }) => (
    <S.IconContainer>
      <MatIcon.FiberManualRecordOutlined htmlColor={color} />
    </S.IconContainer>
  ),
  Location: ({ color = '#C5C0E5' }) => (
    <S.IconContainer>
      <MatIcon.MyLocationTwoTone htmlColor={color} />
    </S.IconContainer>
  ),
  Map: ({ color = 'rgba(148, 0, 20, 0.671)' }) => (
    <S.IconContainer>
      <MatIcon.MapOutlined htmlColor={color} fontSize="large" />
    </S.IconContainer>
  ),
  Categories: ({ color = '#C5C0E5' }) => (
    <S.IconContainer>
      <MatIcon.CategoryTwoTone htmlColor={color} />
    </S.IconContainer>
  ),
  Transactions: ({ color = '#C5C0E5' }) => (
    <S.IconContainer>
      <MatIcon.SyncAlt htmlColor={color} />
    </S.IconContainer>
  ),
};

export default Icon;
