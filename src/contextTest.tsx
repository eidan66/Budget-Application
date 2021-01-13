import React from 'react';
import { Store } from './contexts/budgetContext';

const contextTest = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);

  console.log('state ', state);
  console.log('dispatch ', dispatch);

  return <div>Hey</div>;
};

export default contextTest;
