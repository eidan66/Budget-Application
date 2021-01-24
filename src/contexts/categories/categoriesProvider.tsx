import React from 'react';
import { ICategory } from '../../interfaces/context';
import { CATEGORIES_ACTIONS } from '../actionContext';
import { categoriesReducer } from '../reducerContext';
import { initialState, CategoriesContext } from './categoriesContext';

export const CategoriesContextProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(categoriesReducer, initialState);

  const addCategory = (categories: ICategory) => {
    dispatch({
      type: CATEGORIES_ACTIONS.SET_CATEGORIES,
      payload: categories,
    });
  };

  return (
    <CategoriesContext.Provider
      value={{
        ...state,
        addCategory,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};
