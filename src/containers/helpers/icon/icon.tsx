import * as E from '../../enums/icon';
import * as MUI from '@material-ui/icons';

export const setIcon = (icon: E.icon) => {
  switch (icon) {
    case E.icon.CANCELED:
    default:
      return <MUI.Home />;
  }
};