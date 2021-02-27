import React from 'react';
import { ICategory } from '../../interfaces/context';
import { CATEGORIES_ACTIONS } from '../actionContext';
import { categoriesReducer } from '../reducerContext';
import { initialState, CategoriesContext } from './categoriesContext';

interface IChildren {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const CategoriesContextProvider = ({ children }: IChildren) => {
  const [state, dispatch] = React.useReducer(categoriesReducer, initialState);

  const addCategory = (category: ICategory) => {
    dispatch({
      type: CATEGORIES_ACTIONS.SET_CATEGORIES,
      payload: category,
    });
  };

  return (
    <CategoriesContext.Provider
      value={{
        ...state,
        addCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
