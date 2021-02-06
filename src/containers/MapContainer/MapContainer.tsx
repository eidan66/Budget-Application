import React from 'react';
import { useLocation } from 'react-router-dom';
import { Map } from '../../components/organisms';
import { Loader } from '../../components/atoms';
import * as S from './style';
const MapContainer: React.FC = () => {
  const location = useLocation();

  return (
    <S.MapContainerWrapper>
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
    </S.MapContainerWrapper>
  );
};

export default MapContainer;
