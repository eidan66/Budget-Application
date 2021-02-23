import { useReducer } from 'react';
import { AppContext, initialState } from './appContext';
import { appReducer } from '../reducerContext';
import { APP_ACTIONS } from '../actionContext';
interface IChildren {
  children: React.ReactNode;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const AppContextProvide = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setThemesMode = (themesMode: string) => {
    console.info('From App Context themesMode => - ', themesMode);

    dispatch({
      type: APP_ACTIONS.SET_THEME_MODE,
      payload: themesMode,
    });
  };

  const setCurrency = (currency: string) => {
    dispatch({
      type: APP_ACTIONS.SET_CURRENCY,
      payload: currency,
    });
  };

  const setSorted = (sorted: boolean) => {
    dispatch({
      type: APP_ACTIONS.SET_SORTED,
      payload: sorted,
    });
  };

  const setCategoriesFlag = (categoriesFlag: boolean) => {
    dispatch({
      type: APP_ACTIONS.SET_CATEGORIES_FLAG,
      payload: categoriesFlag,
    });
  };
  //
  return (
    <AppContext.Provider value={{ ...state, setThemesMode, setCurrency, setSorted, setCategoriesFlag }}>
      {children}
    </AppContext.Provider>
  );
};
