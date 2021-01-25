import { useReducer } from 'react';
import { FavoritesContext, initialState } from './favoritesContext';
import { favoritesReducer } from '../reducerContext';
import { FAVORITES_ACTION } from '../actionContext';

export const FavoritesContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  const setPaymentFavorites = (paymentFavorites: any) => {
    dispatch({
      type: FAVORITES_ACTION.SET_FAVORITES,
      payload: paymentFavorites,
    });
  };

  return (
    <FavoritesContext.Provider value={{ ...state, setPaymentFavorites }}>{props.children}</FavoritesContext.Provider>
  );
};
