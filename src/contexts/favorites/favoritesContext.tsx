/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';
import { IFavorites } from '../../interfaces/context';

export const initialState = {
  paymentFavorites: [],
  setPaymentFavorites: () => {},
};

export const FavoritesContext = createContext<IFavorites>(initialState);
