import * as React from 'react';
import { Icon } from '../../../models/icon';
import { setIcon } from '../../../helpers/icon/icon';

const AtomIcon: React.FC<Icon> = ({ icon, color, fontSize }) => {
  return <>{setIcon(icon, color, fontSize)}</>;
};

export default AtomIcon;
