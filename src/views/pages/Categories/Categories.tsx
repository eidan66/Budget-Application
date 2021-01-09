import React, { FC } from 'react';
import {} from '../../../components/organisms';
import { ExpenseMiniCard } from '../../../components/molecules';
import db from '../../../mockup-tests/Payment_History.json';
import * as S from './style';
import { getRandomColor } from '../../../helpers';

export const categoriesRender = (database, categories) => {
  //   const categories = [];

  return database.map((data) => {
    let flag = false;

    categories.map((x) => {
      if (x === data.category) return (flag = true);
    });

    if (!flag) {
      categories.push(data.category);
      flag = false;
      return (
        <S.CardWrapper>
          <ExpenseMiniCard.Category category={data.category} color={getRandomColor()} />
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

  return <S.CategoryWrapper>{categoriesRender(db, categories)}</S.CategoryWrapper>;
};

export default Categories;
