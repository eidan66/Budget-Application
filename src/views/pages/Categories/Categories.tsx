/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { ExpenseMiniCard } from '../../../components/molecules';
import { Typography } from '../../../components/atoms';
// import { TransactionsContainer } from '../../../containers';
import * as S from './style';

import { CategoriesContext } from '../../../contexts/categories/categoriesContext';
import { ICategory } from './../../../interfaces/context';
import { useHistory } from 'react-router';

const Categories = (): JSX.Element => {
  const { categories } = useContext(CategoriesContext);
  const history = useHistory();

  const categoriesRender = (c: ICategory[]) => {
    return c.map((category: { name: string; color: string; id: string }) => {
      return (
        <S.CardWrapper>
          <ExpenseMiniCard.Category
            key={category.id}
            onClick={() =>
              history.push({
                pathname: '/Transactions',
                search: `?category=${category.name}`,
                state: { category: category.name },
              })
            }
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
