import React, { useContext } from 'react';

import { ExpenseMiniCard } from '../../../components/molecules';
import { Typography } from '../../../components/atoms';
import * as S from './style';

import { CategoriesContext } from '../../../contexts/categories/categoriesContext';
import { ICategory } from './../../../interfaces/context';

const Categories = (): JSX.Element => {
  const { categories } = useContext(CategoriesContext);

  const categoriesRender = (c: ICategory[]) => {
    return c.map((category: { name: string; color: string; id: string }) => {
      return (
        <S.CardWrapper>
          <ExpenseMiniCard.Category
            key={category.id}
            onClick={() => console.log('hey!')}
            category={category.name}
            color={category.color}
          />
        </S.CardWrapper>
      );
    });
  };

  return (
    <S.CategoryWrapper>
      <S.TitleWrapper>
        <Typography.MediumText color="primary">Categories</Typography.MediumText>
      </S.TitleWrapper>

      <S.CategoriesWrapper>{categoriesRender(categories)}</S.CategoriesWrapper>
    </S.CategoryWrapper>
  );
};

export default Categories;
