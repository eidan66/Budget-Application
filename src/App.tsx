/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Icon, Typography } from './components/atoms';

const App = () => {
  return (
    <>
      <Icon.SettingsIcon />
      <Typography.UnSelectedNavBar>Charts</Typography.UnSelectedNavBar>
    </>
  );
};

export default App;
