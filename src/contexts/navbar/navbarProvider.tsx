import { useReducer } from 'react';
import { NavbarContext, initialState } from './navbarContext';
import { navbarReducer } from '../reducerContext';
import { NAVBAR_ACTION } from '../actionContext';

interface IChildren {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const NavbarContextProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(navbarReducer, initialState);

  const setOpen = (loading: boolean) => {
    dispatch({
      type: NAVBAR_ACTION.SET_OPEN,
      payload: loading,
    });
  };

  return <NavbarContext.Provider value={{ ...state, setOpen }}>{children}</NavbarContext.Provider>;
};
