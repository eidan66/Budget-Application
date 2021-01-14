/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react';
import Categories from './views/pages/Categories/index';
import smallDB from './mockup-tests/smallmockup.json';
import { compareFunction } from './helpers';

const App = () => {
  const data = [
    {
      firstName: 'First1',
      lastName: 'Last1',
      birthDate: '30/12/1990',
    },
    {
      firstName: 'First2',
      lastName: 'Last2',
      birthDate: '30/12/1995',
    },
    {
      firstName: 'First3',
      lastName: 'Last3',
      birthDate: '03/10/1990',
    },
    {
      firstName: 'First4',
      lastName: 'Last4',
      birthDate: '05/08/1995',
    },
  ];
  // const lod = smallDB.sort(compareFunction);

  const [state, setState] = useState([{}]);

  useEffect(() => {
    const sortedDB = smallDB.sort(compareFunction);
    setState(sortedDB);
  }, []);

  useEffect(() => {
    console.table(state);
  }, [state]);

  return (
    <>
      <Categories />
    </>
  );
};

export default App;
