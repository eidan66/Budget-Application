import React from 'react';
import { useLocation } from 'react-router-dom';
import { Map } from '../../components/organisms';
import * as S from './style';
import { Loader } from './../../components/atoms';

interface ILocationState {
  position: [number, number];
  map: boolean;
  country: string;
  city: string;
  street: string;
  business: string;
  first_name: string;
  last_name: string;
  time: string;
  date: string;
  avatarSrc: string;
}

const MapContainer: React.FC = () => {
  const location = useLocation<ILocationState>();

  return (
    <S.MapContainerWrapper>
      {typeof location.state == 'undefined' ? (
        <Loader.Dots />
      ) : (
        <Map
          position={location.state.position}
          map={location.state.map}
          country={location.state.country}
          city={location.state.city}
          street={location.state.street}
          business={location.state.business}
          first_name={location.state.first_name}
          last_name={location.state.last_name}
          time={location.state.time}
          date={location.state.date}
          avatarSrc={location.state.avatarSrc}
        />
      )}
    </S.MapContainerWrapper>
  );
};

export default MapContainer;
