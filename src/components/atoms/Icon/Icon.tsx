import React, { FC } from 'react';
import Paypal from './Paypal';
import * as MatIcon from '@material-ui/icons';

interface IIcon {
  [property: string]: FC;
}

const Icon: IIcon = {
  CanceledIcon: () => <MatIcon.Cancel htmlColor="red" />,
  PaypalIcon: () => <Paypal color="gray" />,
  IncomeIcon: () => <MatIcon.TrendingUp htmlColor="gray" />,
  DashboardIcon: () => <MatIcon.Dashboard htmlColor="gray" />,
  ChartIcon: () => <MatIcon.PieChart htmlColor="gray" />,
  CardIcon: () => <MatIcon.Payment htmlColor="gray" />,
  CalendarIcon: () => <MatIcon.CalendarToday htmlColor="gray" />,
  MessagesIcon: () => <MatIcon.MailOutline htmlColor="gray" />,
  UserIcon: () => <MatIcon.Person htmlColor="gray" />,
  SettingsIcon: () => <MatIcon.Settings htmlColor="gray" />,
};

export default Icon;

// import * as React from 'react';
// import { Icon } from '../../../models/icon';
// import { setIcon } from '../../../helpers/icon/icon';

// const AtomIcon: React.FC<Icon> = ({ icon, color, fontSize }) => {
//   return <>{setIcon(icon, color, fontSize)}</>;
// };

// export default AtomIcon;
