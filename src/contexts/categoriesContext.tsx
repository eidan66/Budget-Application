/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from 'react';

export interface ICategory {
  name: string;
  color: string;
}

export interface ICategories {
  categories: Array<ICategory>;
  addCategory: (categories: ICategory) => void;
}

export interface IAction {
  type: string;
  payload: Array<ICategories> | any;
}

export const initialState = {
  categories: [],
  addCategory: () => {},
};

export const CategoriesContext = createContext<ICategories>(initialState);

const reducer = (state: ICategories, action: IAction) => {
  switch (action.type) {
    case 'add':
      console.log('switch', action.payload, Date.now());
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    default:
      return state;
  }
};

export const CategoriesContextProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log('PROVIDER STATE', state);

  const addCategory = (categories: ICategory) => {
    dispatch({
      type: 'add',
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

//   const removeCategory = (id) => {
//     const newList = state.categories.slice().filter((item) => item.id !== id);
//     dispatch({
//       type: 'remove',
//       payload: newList,
//     });
//   };

// case 'remove':
//   return {
//     ...state,
//     categories: action.payload,
//   };
