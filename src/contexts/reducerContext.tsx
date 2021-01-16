/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ICategories, ICategoriesAction, IApp, IAppAction } from '../interfaces/context';
import { CATEGORIES_ACTIONS, APP_ACTIONS } from './actionContext';

export const categoriesReducer = (state: ICategories, action: ICategoriesAction) => {
  switch (action.type) {
    case CATEGORIES_ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    default:
      return state;
  }
};

export const appReducer = (state: IApp, action: IAppAction) => {
  switch (action.type) {
    case APP_ACTIONS.SET_THEME_MODE:
      return {
        ...state,
        themeMode: action.payload,
      };
    case APP_ACTIONS.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };
    case APP_ACTIONS.SET_SORTED:
      return {
        ...state,
        sorted: action.payload,
      };
    case APP_ACTIONS.SET_CATEGORIES_FLAG:
      return {
        ...state,
        categoriesFlag: action.payload,
      };

    default:
      return state;
  }
};
