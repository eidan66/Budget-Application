/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ICategories } from '../interfaces/context';
import { IAction } from './../interfaces/context';
import { ACTIONS } from './actionContext';

export const reducer = (state: ICategories, action: IAction) => {
  switch (action.type) {
    case ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    default:
      return state;
  }
};
