import * as React from 'react';
import * as I from '../../../models/icon/icon';
import * as E from '../../../containers/enums/icon';
import * as H from '../../../containers/helpers/icon/icon';

const AtomIcon: React.FC<I.Icon> = ({ icon }) => {
  return <>{H.setIcon(icon)}</>;
};

export default AtomIcon;
