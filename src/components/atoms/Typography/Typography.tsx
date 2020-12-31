import React, { FC } from 'react';
import { Typography as MatTypography } from '@material-ui/core';

interface IText {
  [property: string]: FC;
}

const Typography: IText = {
  //LEFT Side Nav Bar Typography
  SelectedNavBar: ({ children }) => <MatTypography variant="subtitle1">{children}</MatTypography>,
  UnSelectedNavBar: ({ children }) => <MatTypography variant="subtitle2">{children}</MatTypography>,

  // Balance details Typography
  CurrentBalanceNumber: ({ children }) => <MatTypography variant="h6">{children}</MatTypography>,
  CurrentBalance: () => <MatTypography variant="subtitle1">Current balance</MatTypography>,

  // Card details Typography
  CardTitle: () => <MatTypography variant="h5">Card</MatTypography>,
  CardNumber: ({ children }) => <MatTypography variant="h6">{children}</MatTypography>,
  CardHolderTitle: () => <MatTypography variant="button">card holder</MatTypography>,
  CardHolderName: ({ children }) => <MatTypography variant="subtitle1">{children}</MatTypography>,
  CardValidThruTitle: () => <MatTypography variant="button">valid thru</MatTypography>,
  CardValidDateNumber: ({ children }) => <MatTypography variant="subtitle1">{children}</MatTypography>,

  // RIGHT Side Bar Typography
  UserFullName: ({ children }) => (
    <MatTypography variant="subtitle1" color="primary">
      {children}
    </MatTypography>
  ),
  UserEmailAddress: ({ children }) => <MatTypography variant="subtitle1">{children}</MatTypography>,
  PaymentHistoryTitle: ({ children }) => <MatTypography variant="subtitle1">{children}</MatTypography>,
  PaymentDetailTitle: ({ children }) => <MatTypography variant="body2">{children}</MatTypography>,
  PaymentDetailDate: ({ children }) => <MatTypography variant="subtitle2">{children}</MatTypography>,
  PaymentDetailNumber: ({ children }) => <MatTypography variant="body1">{children}</MatTypography>,
  PaymentDetailCurrency: ({ children }) => <MatTypography variant="button">{children}</MatTypography>,
};

export default Typography;
