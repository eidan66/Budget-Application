import React from 'react';
import Map from './Map';
import db from '../../../mockup-tests/smallmockup.json';

export default {
  title: 'components/organisms/Map',
  component: Map,
};

export const StoryMap = (args) => <Map {...args} />;
StoryMap.args = {
  position: [db[1].location.lat, db[1].location.lng],
};
