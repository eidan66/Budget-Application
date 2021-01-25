/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';
import { IFavorites } from '../../interfaces/context';

export const initialState = {
  favoritePaymentID: '',
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setPaymentFavorites: () => {},
};

export const FavoritesContext = createContext<IFavorites>(initialState);
