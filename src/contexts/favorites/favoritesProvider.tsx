import { useReducer, useEffect } from 'react';
import { FavoritesContext, initialState } from './favoritesContext';
import { favoritesReducer } from '../reducerContext';
import { FAVORITES_ACTION } from '../actionContext';

export const FavoritesContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState, () => {
    const localData = localStorage.getItem('fav');
    return localData ? JSON.parse(localData) : initialState;
  });

  console.log('~ state', state);

  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(state.paymentFavorites));
    console.log(localStorage);
  }, [state]);

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

/* 
! JSON.parse(localStorage.fav).map((data)=>data.id)
*/
