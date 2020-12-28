import React, { FC } from 'react';
import { Typography as MatTypography } from '@material-ui/core';

interface IText {
  [property: string]: FC;
}

const Typography: IText = {
  //LEFT Side Nav Bar Typography
  SelectedNavBar: ({ children }) => <MatTypography variant="subtitle1">{children}</MatTypography>,
  UnSelectedNavBar: ({ children }) => <MatTypography variant="subtitle2">{children}</MatTypography>,

  // Card details Typography
  CurrentBalanceNumber: ({ children }) => <MatTypography variant="h6">{children}</MatTypography>,
  CurrentBalance: ({ children }) => <MatTypography variant="subtitle1">{children}</MatTypography>,
  CardTitle: ({ children }) => <MatTypography variant="h5">{children}</MatTypography>,
  CardNumber: ({ children }) => <MatTypography variant="h6">{children}</MatTypography>,
  CardHolderTitle: ({ children }) => <MatTypography variant="button">{children}</MatTypography>,
  CardHolderName: ({ children }) => <MatTypography variant="subtitle1">{children}</MatTypography>,
  CardValidThruTitle: ({ children }) => <MatTypography variant="button">{children}</MatTypography>,
  CardValidDateNumber: ({ children }) => <MatTypography variant="subtitle1">{children}</MatTypography>,

  // RIGHT Side Bar Typography
  UserFullName: ({ children }) => <MatTypography variant="subtitle1">{children}</MatTypography>,
  UserEmailAddress: ({ children }) => <MatTypography variant="subtitle1">{children}</MatTypography>,
  PaymentHistoryTitle: ({ children }) => <MatTypography variant="subtitle1">{children}</MatTypography>,
  PaymentDetailTitle: ({ children }) => <MatTypography variant="body2">{children}</MatTypography>,
  PaymentDetailDate: ({ children }) => <MatTypography variant="subtitle2">{children}</MatTypography>,
  PaymentDetailNumber: ({ children }) => <MatTypography variant="body1">{children}</MatTypography>,
  PaymentDetailCurrency: ({ children }) => <MatTypography variant="button">{children}</MatTypography>,
};

export default Typography;
