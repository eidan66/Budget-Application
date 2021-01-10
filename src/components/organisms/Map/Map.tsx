import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as S from './style';
import { iconMarker } from '../../../assets/images';
import { ExpensesDetails } from './../../molecules';

interface IMaoProps {
  position: [number, number];
  business: string;
  first_name: string;
  last_name: string;
  time: string;
  date: string;
  avatarSrc: string;
  map?: boolean;
  country?: string;
  city?: string;
  street?: string;
}

const Map: React.FC<IMaoProps> = ({
  position,
  business,
  first_name,
  last_name,
  time,
  date,
  avatarSrc,
  map,
  country,
  city,
  street,
}) => {
  const money_marker = L.icon({
    iconUrl: iconMarker,
    iconSize: [60, 60], // size of the icon
    iconAnchor: [27, 57], // point of the icon which will correspond to marker's location
  });
  return (
    <MapContainer style={{ height: '100vh' }} center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={money_marker}>
        <Popup>
          <S.PopupWrapper>
            <ExpensesDetails
              map={map}
              country={country}
              city={city}
              street={street}
              business={business}
              first_name={first_name}
              last_name={last_name}
              time={time}
              date={date}
              avatarSrc={avatarSrc}
            />
          </S.PopupWrapper>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
