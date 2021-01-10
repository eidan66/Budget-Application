import React from 'react';
import Map from './Map';
import db from '../../../mockup-tests/smallmockup.json';
import userDb from '../../../mockup-tests/userDetails.json';

export default {
  title: 'components/organisms/Map',
  component: Map,
};

export const StoryMap = (args) => <Map {...args} />;
StoryMap.args = {
  position: [db[1].location.lat, db[1].location.lng],
  avatarSrc: userDb.avatar,
  first_name: userDb.first_name,
  last_name: userDb.last_name,
  business: db[1].company,
  time: db[1].time,
  date: db[1].date,
  country: db[1].location.country,
  city: db[1].location.city,
  street: db[1].location.street,
  map: true,
  // position: [db[1].location.lat, db[1].location.lng],
};
