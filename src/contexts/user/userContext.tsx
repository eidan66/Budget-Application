/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';
import { IUser } from './../../interfaces/context';

export const initialState = {
  userDetails: [],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setUserDetails: () => {},
};

export const UserContext = createContext<IUser>(initialState);
