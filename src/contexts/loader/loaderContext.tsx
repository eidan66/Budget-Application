/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';
import { ILoader } from '../../interfaces/context';

export const initialState = {
  loading: false,
  setLoader: () => {},
};

export const LoaderContext = createContext<ILoader>(initialState);
