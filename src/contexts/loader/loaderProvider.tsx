import { useReducer } from 'react';
import { LoaderContext, initialState } from './loaderContext';
import { loaderReducer } from '../reducerContext';
import { LOADER_ACTION } from '../actionContext';

interface IChildren {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const LoaderContextProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(loaderReducer, initialState);

  const setLoader = (loading: boolean) => {
    dispatch({
      type: LOADER_ACTION.SET_LOADER,
      payload: loading,
    });
  };

  return <LoaderContext.Provider value={{ ...state, setLoader }}>{children}</LoaderContext.Provider>;
};
