import * as E from '../../enums/icon';
import * as MUI from '@material-ui/icons';
import Paypal from '../../../components/atoms/AtomIcon/Paypal';

export const setIcon = (icon: E.icon, color?: string, fontSize?: E.fontSize) => {
  switch (icon) {
    case E.icon.CANCELED:
      return <MUI.Cancel htmlColor={color} fontSize={fontSize} />;

    case E.icon.PAYPAL:
      return <Paypal color={color} fontSize={setPaypalSize(fontSize)} />;

    case E.icon.INCOME:
      return <MUI.TrendingUp htmlColor={color} fontSize={fontSize} />;

    case E.icon.DASHBOARD:
      return <MUI.Dashboard htmlColor={color} fontSize={fontSize} />;

    case E.icon.CHART:
      return <MUI.PieChart htmlColor={color} fontSize={fontSize} />;

    case E.icon.CARD:
      return <MUI.Payment htmlColor={color} fontSize={fontSize} />;

    case E.icon.CALENDAR:
      return <MUI.CalendarToday htmlColor={color} fontSize={fontSize} />;

    case E.icon.MESSAGES:
      return <MUI.MailOutline htmlColor={color} fontSize={fontSize} />;

    case E.icon.USER:
      return <MUI.Person htmlColor={color} fontSize={fontSize} />;

    case E.icon.SETTING:
      return <MUI.Settings htmlColor={color} fontSize={fontSize} />;
  }
};

export const setPaypalSize = (fontSize?: E.fontSize) => {
  switch (fontSize) {
    case E.fontSize.DEFAULT:
    default:
      return '1.5rem';

    case E.fontSize.INHERIT:
      return 'inherit';

    case E.fontSize.LARGE:
      return '2.1875rem';

    case E.fontSize.SMALL:
      return '1.25rem';
  }
};
