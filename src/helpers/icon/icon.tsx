import { icon as Icon, fontSize as FontSize } from '../../models/icon';
import * as MUI from '@material-ui/icons';
import Paypal from '../../components/atoms/Icon/Paypal';

export const setIcon = (icon: Icon, color?: string, fontSize?: FontSize) => {
  switch (icon) {
    case Icon.CANCELED:
      return <MUI.Cancel htmlColor={color} fontSize={fontSize} />;

    case Icon.PAYPAL:
      return <Paypal color={color} fontSize={setPaypalSize(fontSize)} />;

    case Icon.INCOME:
      return <MUI.TrendingUp htmlColor={color} fontSize={fontSize} />;

    case Icon.DASHBOARD:
      return <MUI.Dashboard htmlColor={color} fontSize={fontSize} />;

    case Icon.CHART:
      return <MUI.PieChart htmlColor={color} fontSize={fontSize} />;

    case Icon.CARD:
      return <MUI.Payment htmlColor={color} fontSize={fontSize} />;

    case Icon.CALENDAR:
      return <MUI.CalendarToday htmlColor={color} fontSize={fontSize} />;

    case Icon.MESSAGES:
      return <MUI.MailOutline htmlColor={color} fontSize={fontSize} />;

    case Icon.USER:
      return <MUI.Person htmlColor={color} fontSize={fontSize} />;

    case Icon.SETTING:
      return <MUI.Settings htmlColor={color} fontSize={fontSize} />;
  }
};

export const setPaypalSize = (fontSize?: FontSize) => {
  switch (fontSize) {
    case FontSize.DEFAULT:
    default:
      return '1.5rem';

    case FontSize.INHERIT:
      return 'inherit';

    case FontSize.LARGE:
      return '2.1875rem';

    case FontSize.SMALL:
      return '1.25rem';
  }
};
