import { useReducer, useEffect } from 'react';
import { FavoritesContext, initialState } from './favoritesContext';
import { favoritesReducer } from '../reducerContext';
import { FAVORITES_ACTION } from '../actionContext';

export const FavoritesContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);
  console.log('~ state', state);

  useEffect(() => {
    localStorage.setItem('paymentFav', state.favoritePaymentID);
    console.table(localStorage);
  }, [state]);

  const setPaymentFavorites = (favoritePaymentID: string) => {
    dispatch({
      type: FAVORITES_ACTION.SET_FAVORITES,
      payload: favoritePaymentID,
    });
  };

  return (
    <FavoritesContext.Provider value={{ ...state, setPaymentFavorites }}>{props.children}</FavoritesContext.Provider>
  );
};

/* 
! This make problems !! 
!, () => {
!    const localData = localStorage.getItem('paymentFav');
!    return localData ? localData : initialState;
!  }

*/
