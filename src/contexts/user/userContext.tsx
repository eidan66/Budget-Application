/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';
import { IUser } from './../../interfaces/context';

export const initialState = {
  userDetails: [],
  setUserDetails: () => {},
};

export const UserContext = createContext<IUser>(initialState);
