/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />

import React, { FC } from 'react';
import { card, dot, spinner } from '../../../assets/images';

interface ILoader {
  [property: string]: FC;
}

const Loader: ILoader = {
  Card: () => <img src={card} alt="Card Loader..." />,
  Dot: () => <img src={dot} alt="Dots Loader..." />,
  Spinner: () => <img src={spinner} alt="Spinner Loader..." />,
};

export default Loader;
