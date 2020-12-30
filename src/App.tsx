/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Icon, Typography } from './components/atoms';
import { icon } from './models/icon';

const App = () => {
  return (
    <>
      <Icon icon={icon.DASHBOARD} color="red" />
      <Icon icon={icon.CANCELED} />
      <Typography.UnSelectedNavBar>Charts</Typography.UnSelectedNavBar>
    </>
  );
};

export default App;
