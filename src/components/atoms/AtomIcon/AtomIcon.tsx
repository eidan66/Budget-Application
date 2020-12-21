import * as React from 'react';
import * as I from '../../../models/icon/icon';
import * as H from '../../../containers/helpers/icon/icon';

const AtomIcon: React.FC<I.Icon> = ({ icon, color, fontSize }) => {
  return <>{H.setIcon(icon, color, fontSize)}</>;
};

export default AtomIcon;
