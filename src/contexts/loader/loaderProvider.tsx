import { useReducer } from 'react';
import { LoaderContext, initialState } from './loaderContext';
import { loaderReducer } from '../reducerContext';
import { LOADER_ACTION } from '../actionContext';

export const LoaderContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(loaderReducer, initialState);

  const setLoader = (loading: boolean) => {
    dispatch({
      type: LOADER_ACTION.SET_LOADER,
      payload: loading,
    });
  };

  return <LoaderContext.Provider value={{ ...state, setLoader }}>{props.children}</LoaderContext.Provider>;
};
