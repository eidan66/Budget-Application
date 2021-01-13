import React, { FC } from 'react';
import { ExpenseMiniCard } from '../../../components/molecules';
import { Typography } from '../../../components/atoms';
import db from '../../../mockup-tests/Payment_History.json';
import * as S from './style';
import { getRandomColor } from '../../../helpers';
import { Store } from '../../../contexts/budgetContext';

export const categoriesRender = (database: any[]) => {
  const { state, dispatch } = React.useContext(Store);
  console.log('~C dispatch', dispatch);
  console.log('~C state', state);

  return database.map((data: { category: string | undefined }) => {
    let flag = false;

    state.categories.map((x: { name: any }) => {
      if (x.name === data.category) return (flag = true);
    });

    if (!flag) {
      // const category = {};
      // categories.push(data.category);
      const color = getRandomColor();
      dispatch({
        type: 'FETCH_DATA',
        name: data.category,
        color: color,
      });

      // categoriesColors.push(color);

      flag = false;
      return (
        <S.CardWrapper>
          <ExpenseMiniCard.Category onClick={() => console.log('hey!')} category={data.category} color={color} />
        </S.CardWrapper>
      );
    }
    console.log(state);
  });
};

interface ICategoryProp {
  category?: string;
  color?: string;
}

const Categories: FC<ICategoryProp> = () => {
  // const categories = [
  //   {
  //     categoryName: '',
  //     color: '',
  //   },
  // ];
  // const categoriesColors = [];

  return (
    <S.CategoryWrapper>
      <S.TitleWrapper>
        <Typography.MediumText color="primary">Categories</Typography.MediumText>
      </S.TitleWrapper>

      <S.CategoriesWrapper>{categoriesRender(db)}</S.CategoriesWrapper>
    </S.CategoryWrapper>
  );
};

export default Categories;
