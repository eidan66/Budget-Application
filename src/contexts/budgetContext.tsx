import React from 'react';

interface IState {
  categories: [
    {
      name: any;
      color: any;
    }
  ];
}

interface IAction {
  type: string;
  name: any;
  color: any;
}
const initialState: IState = {
  categories: [
    {
      name: ' ',
      color: ' ',
    },
  ],
};

export const Store = React.createContext<IState | any>(initialState);

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, categories: [{ name: action.name, color: action.color }] };
    default:
      return state;
  }
};

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
};
