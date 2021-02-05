import React, { FC } from 'react';
import Paypal from './Paypal';
import * as S from './style';
import * as MatIcon from '@material-ui/icons';

interface IIcon {
  color?: string | '#959095';
}
interface IIconProps {
  [property: string]: FC<IIcon>;
}

const Icon: IIconProps = {
  Cancelled: () => (
    <S.IconContainer>
      <MatIcon.Cancel htmlColor="#ff8789" fontSize="large" />
    </S.IconContainer>
  ),
  Paypal: () => (
    <S.IconContainer>
      <Paypal color="#3b7bbf " fontSize="2.1875rem" />
    </S.IconContainer>
  ),
  Income: () => (
    <S.IconContainer>
      <MatIcon.TrendingUp htmlColor="#4333a0" fontSize="large" />
    </S.IconContainer>
  ),
  Dashboard: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.Dashboard htmlColor={color} />
    </S.IconContainer>
  ),
  Charts: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.PieChart htmlColor={color} />
    </S.IconContainer>
  ),
  Cards: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.Payment htmlColor={color} />
    </S.IconContainer>
  ),
  Calendar: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.CalendarToday htmlColor={color} />
    </S.IconContainer>
  ),
  Messages: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.MailOutline htmlColor={color} />
    </S.IconContainer>
  ),
  User: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.Person htmlColor={color} />
    </S.IconContainer>
  ),
  Settings: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.Settings htmlColor={color} />
    </S.IconContainer>
  ),
  Expense: () => (
    <S.IconContainer>
      <MatIcon.TrendingDown htmlColor="#ff8789" fontSize="large" />
    </S.IconContainer>
  ),
  Person: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.EmojiPeople htmlColor={color} />
    </S.IconContainer>
  ),
  Clock: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.QueryBuilderSharp htmlColor={color} />
    </S.IconContainer>
  ),
  TimeDate: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.DateRangeOutlined htmlColor={color} />
    </S.IconContainer>
  ),
  Circle: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.FiberManualRecordOutlined htmlColor={color} />
    </S.IconContainer>
  ),
  Location: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.MyLocationTwoTone htmlColor={color} />
    </S.IconContainer>
  ),
  Map: ({ color = 'rgba(148, 0, 20, 0.671)' }) => (
    <S.IconContainer>
      <MatIcon.MapOutlined htmlColor={color} fontSize="large" />
    </S.IconContainer>
  ),
  Categories: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.CategoryTwoTone htmlColor={color} />
    </S.IconContainer>
  ),
  Transactions: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.SyncAlt htmlColor={color} />
    </S.IconContainer>
  ),
  FavoriteEmpty: ({ color = '#959095' }) => (
    <S.IconContainer>
      <MatIcon.FavoriteBorder htmlColor={color} fontSize="large" />
    </S.IconContainer>
  ),
  FavoriteSelected: ({ color = 'rgba(192, 3, 3, 0.74)' }) => (
    <S.IconContainer>
      <MatIcon.Favorite htmlColor={color} fontSize="large" />
    </S.IconContainer>
  ),
};

export default Icon;
