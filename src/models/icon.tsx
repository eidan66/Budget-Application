export enum icon {
  CANCELED = 'canceled',
  PAYPAL = 'paypal',
  INCOME = 'income',
  DASHBOARD = 'dashboard',
  CHART = 'chart',
  CARD = 'card',
  CALENDAR = 'calendar',
  MESSAGES = 'messages',
  USER = 'user',
  SETTING = 'setting',
}

export enum fontSize {
  DEFAULT = 'default',
  INHERIT = 'inherit',
  LARGE = 'large',
  SMALL = 'small',
}

export interface Icon {
  icon: icon;
  color?: string;
  fontSize?: fontSize;
}

export interface Paypal {
  color?: string;
  fontSize?: string;
}
