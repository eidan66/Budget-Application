import React, { FC } from 'react';
import {} from '../../../components/organisms';
import { ExpenseMiniCard } from '../../../components/molecules';
import { Typography } from '../../../components/atoms';
import db from '../../../mockup-tests/Payment_History.json';
import * as S from './style';
import { getRandomColor } from '../../../helpers';

export const categoriesRender = (database, categories, categoriesColors) => {
  return database.map((data) => {
    let flag = false;

    categories.map((x) => {
      if (x === data.category) return (flag = true);
    });

    if (!flag) {
      categories.push(data.category);
      const color = getRandomColor();
      categoriesColors.push(color);
      flag = false;
      return (
        <S.CardWrapper>
          <ExpenseMiniCard.Category category={data.category} color={color} />
        </S.CardWrapper>
      );
    }
  });
};

interface ICategoryProp {
  category: string;
  color: string;
}

const Categories: FC<ICategoryProp> = () => {
  const categories = [];
  const categoriesColors = [];

  return (
    <S.CategoryWrapper>
      <S.TitleWrapper>
        <Typography.MediumText color="primary">Categories</Typography.MediumText>
      </S.TitleWrapper>

      <S.CategoriesWrapper>{categoriesRender(db, categories, categoriesColors)}</S.CategoriesWrapper>
    </S.CategoryWrapper>
  );
};

export default Categories;