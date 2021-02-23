import { useReducer } from 'react';
import { UserContext, initialState } from './userContext';
import { userReducer } from '../reducerContext';
import { USER_ACTIONS } from '../actionContext';
import { IUserDetails } from '../../interfaces/context';

interface IChildren {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const UserContextProvide = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUserDetails = (userDetails: IUserDetails) => {
    dispatch({
      type: USER_ACTIONS.SET_USER_DETAILS,
      payload: userDetails,
    });
  };

  return <UserContext.Provider value={{ ...state, setUserDetails }}>{children}</UserContext.Provider>;
};
