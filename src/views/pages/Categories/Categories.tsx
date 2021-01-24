/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useContext } from 'react';

// import { ExpenseMiniCard } from '../../../components/molecules';
import db from '../../../mockup-tests/smallmockup.json';
import { Typography } from '../../../components/atoms';
import { getRandomColor } from '../../../helpers';
import * as S from './style';

import { CategoriesContext, ICategory } from '../../../contexts/categoriesContext';

const Categories = (): JSX.Element => {
  const { categories, addCategory } = useContext(CategoriesContext);

  const categoriesRender = (database: any) => {
    database.map((data: { category: string }) => {
      console.log('print type - ', typeof categories[0]);

      addCategory({ name: data.category, color: getRandomColor() });
    });

    console.log('late print type - ', typeof categories[0]);
  };

  useEffect(() => {
    console.log('start function');
    categoriesRender(db);
  }, []);

  useEffect(() => {
    console.log('useEffect', categories);
  }, [categories]);

  return (
    <S.CategoryWrapper>
      <S.TitleWrapper>
        <Typography.MediumText color="primary">Categories</Typography.MediumText>
      </S.TitleWrapper>

      <S.CategoriesWrapper>
        {/* <button
          onClick={() => {
            categories.length === 0 ? console.log('yes') : console.log('no');

            for (let index = 0; index < 4; index++) {
              addCategory({ name: 'test' + index, color: '#00' + index });
            }
            categories.length === 0 ? console.log('2yes') : console.log('2no');
          }}
        >
          Click To Add !
        </button> */}
      </S.CategoriesWrapper>
    </S.CategoryWrapper>
  );
};

export default Categories;

/* 
<S.CardWrapper>
          <ExpenseMiniCard.Category onClick={() => console.log('hey!')} category={data.category} color={color} />
        </S.CardWrapper>

*/
