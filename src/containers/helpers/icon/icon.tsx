import * as E from '../../enums/icon';
import * as MUI from '@material-ui/icons';
import Paypal from '../../../components/atoms/AtomIcon/Paypal';

export const setIcon = (icon: E.icon) => {
  switch (icon) {
    case E.icon.CANCELED:
      return <MUI.Cancel color="error" />;

    case E.icon.PAYPAL:
      return <Paypal />;

    case E.icon.INCOME:
      return <MUI.TrendingUp color="disabled" />;

    case E.icon.DASHBOARD:
      return <MUI.Dashboard color="disabled" />;

    case E.icon.CHART:
      return <MUI.PieChart color="disabled" />;

    case E.icon.CARD:
      return <MUI.Payment color="disabled" />;

    case E.icon.CALENDAR:
      return <MUI.CalendarToday color="disabled" />;

    case E.icon.MESSAGES:
      return <MUI.MailOutline color="disabled" />;

    case E.icon.USER:
      return <MUI.Person color="disabled" />;

    case E.icon.SETTING:
      return <MUI.Settings color="disabled" />;
  }
};
