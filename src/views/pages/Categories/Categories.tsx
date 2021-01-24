/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useContext, useState } from 'react';

import { ExpenseMiniCard } from '../../../components/molecules';
import db from '../../../mockup-tests/Payment_History.json';
import { Typography } from '../../../components/atoms';
import { getRandomColor } from '../../../helpers';
import * as S from './style';

import { CategoriesContext } from '../../../contexts/categories/categoriesContext';
import { ICategory } from './../../../interfaces/context';

const Categories = (): JSX.Element => {
  const { categories, addCategory } = useContext(CategoriesContext);
  const [flag, setFlag] = useState(false);

  const categoriesCollector = (database: { category: string; id: string }[]) => {
    const category: string[] = [];
    let isThere = false;

    database.map((data: { category: string; id: string }) => {
      category.map((c) => {
        c === data.category ? (isThere = true) : '';
      });

      !isThere
        ? (category.push(data.category), addCategory({ name: data.category, color: getRandomColor(), id: data.id }))
        : '';
      isThere = false;
    });
    setFlag(true);
  };

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

  useEffect(() => {
    categoriesCollector(db);
  }, []);

  return (
    <S.CategoryWrapper>
      <S.TitleWrapper>
        <Typography.MediumText color="primary">Categories</Typography.MediumText>
      </S.TitleWrapper>

      {<S.CategoriesWrapper>{flag ? categoriesRender(categories) : null}</S.CategoriesWrapper>}
    </S.CategoryWrapper>
  );
};

export default Categories;
