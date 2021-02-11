import { useReducer } from 'react';
import { NavbarContext, initialState } from './navbarContext';
import { navbarReducer } from '../reducerContext';
import { NAVBAR_ACTION } from '../actionContext';

export const NavbarContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(navbarReducer, initialState);

  const setOpen = (loading: boolean) => {
    dispatch({
      type: NAVBAR_ACTION.SET_OPEN,
      payload: loading,
    });
  };

  return <NavbarContext.Provider value={{ ...state, setOpen }}>{props.children}</NavbarContext.Provider>;
};
