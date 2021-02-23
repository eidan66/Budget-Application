/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';
import { ILoader } from '../../interfaces/context';

export const initialState = {
  loading: false,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setLoader: () => {},
};

export const LoaderContext = createContext<ILoader>(initialState);
