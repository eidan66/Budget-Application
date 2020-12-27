/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Icon, Typography } from './components/atoms';
import { icon } from './models/icon';
import { color } from './models/typography';

const App = () => {
  return (
    <>
      <Icon icon={icon.DASHBOARD} color="red" />
      <Icon icon={icon.CANCELED} />
      <Typography color={color.BLUEGEM} text="Test Test Test" />
    </>
  );
};

export default App;
