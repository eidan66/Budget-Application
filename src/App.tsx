import React from 'react';
import * as A from './components/atoms';
import * as E from './containers/enums/icon';
import * as E1 from './containers/enums/typography/typography';

const App = () => {
  return (
    <>
      <A.AtomIcon icon={E.icon.DASHBOARD} color="red" />
      <A.AtomIcon icon={E.icon.CANCELED} />
      <A.Typography color={E1.color.BLUEGEM} text="Test Test Test" />
    </>
  );
};

export default App;
