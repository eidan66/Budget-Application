/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';
import { INavbar } from '../../interfaces/context';

export const initialState = {
  open: false,
  setOpen: () => {},
};

export const NavbarContext = createContext<INavbar>(initialState);
