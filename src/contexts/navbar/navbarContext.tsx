/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';
import { INavbar } from '../../interfaces/context';

export const initialState = {
  open: false,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setOpen: () => {},
};

export const NavbarContext = createContext<INavbar>(initialState);
