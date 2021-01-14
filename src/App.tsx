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
  console.table(smallDB);
  console.log('***');
  const lod = smallDB.sort(compareFunction);
  console.log('***');
  console.table(lod);

  // const [state, setState] = useState([{}]);

  // useEffect(() => {
  //   console.log(smallDB.sort(compareValues('date', 'desc')));
  // }, []);

  return (
    <>
      <Categories />
    </>
  );
};

export default App;
