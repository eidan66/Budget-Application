import React from 'react';
import { ICategory } from '../../interfaces/context';
import { ACTIONS } from '../actionContext';
import { reducer } from '../reducerContext';
import { initialState, CategoriesContext } from './categoriesContext';

export const CategoriesContextProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addCategory = (categories: ICategory) => {
    dispatch({
      type: ACTIONS.SET_CATEGORIES,
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
