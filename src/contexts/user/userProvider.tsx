import { useReducer } from 'react';
import { UserContext, initialState } from './userContext';
import { userReducer } from '../reducerContext';
import { USER_ACTIONS } from '../actionContext';
// import { IUserDetails } from '../../interfaces/context';

export const UserContextProvide = (props: any) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUserDetails = (userDetails: any) => {
    dispatch({
      type: USER_ACTIONS.SET_USER_DETAILS,
      payload: userDetails,
    });
  };

  return <UserContext.Provider value={{ ...state, setUserDetails }}>{props.children}</UserContext.Provider>;
};
