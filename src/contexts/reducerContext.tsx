/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  ICategories,
  ICategoriesAction,
  IApp,
  IUser,
  IUserAction,
  IPayment,
  IPaymentAction,
  ILoader,
  ILoaderAction,
  INavbar,
  INavbarAction,
  IAppAction,
} from '../interfaces/context';
import {
  CATEGORIES_ACTIONS,
  APP_ACTIONS,
  USER_ACTIONS,
  PAYMENT_ACTION,
  LOADER_ACTION,
  NAVBAR_ACTION,
} from './actionContext';

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

export const appReducer = (state: IApp, action: IAppAction): IApp => {
  switch (action.type) {
    case APP_ACTIONS.SET_THEME_MODE:
      return {
        ...state,
        themesMode: action.payload,
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

export const userReducer = (state: IUser, action: IUserAction) => {
  switch (action.type) {
    case USER_ACTIONS.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: [...state.userDetails, action.payload],
      };

    default:
      return state;
  }
};

export const paymentReducer = (state: IPayment, action: IPaymentAction) => {
  switch (action.type) {
    case PAYMENT_ACTION.SET_PAYMENT_DETAILS:
      return {
        ...state,
        paymentDetails: [...state.paymentDetails, ...action.payload],
      };

    default:
      return state;
  }
};

export const loaderReducer = (state: ILoader, action: ILoaderAction) => {
  switch (action.type) {
    case LOADER_ACTION.SET_LOADER:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export const navbarReducer = (state: INavbar, action: INavbarAction) => {
  switch (action.type) {
    case NAVBAR_ACTION.SET_OPEN:
      return {
        ...state,
        open: action.payload,
      };

    default:
      return state;
  }
};
