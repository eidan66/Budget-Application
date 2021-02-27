import { APP_ACTIONS } from '../contexts/actionContext';

// ******** Categories Context ********  \\
export interface ICategory {
  name: string;
  color: string;
  id: string;
}

export interface ICategories {
  categories: ICategory[];
  addCategory: (category: ICategory) => void;
}

export interface ICategoriesAction {
  type: string;
  payload: ICategory;
}

//  ******** App Context ********  \\
export interface IApp {
  themesMode: string;
  currency: string;
  sorted: boolean;
  categoriesFlag: boolean;
  setThemesMode: (theme: string) => void;
  setCurrency: (currency: string) => void;
  setSorted: (sorted: boolean) => void;
  setCategoriesFlag: (categoriesFlag: boolean) => void;
}
export interface IAppAction1 {
  type: APP_ACTIONS.SET_THEME_MODE | APP_ACTIONS.SET_CURRENCY;
  payload: string;
}
export interface IAppAction2 {
  type: APP_ACTIONS.SET_SORTED | APP_ACTIONS.SET_CATEGORIES_FLAG;
  payload: boolean;
}

export type IAppAction = IAppAction1 | IAppAction2;

//  ******** User Context ********  \\

export interface IUserCreditCard {
  last4Digits: number;
  exp_year: number;
  exp_month: number;
}

export interface IUserDetails {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  current_balance: string;
  current_balance_currency: string;
  credit_card: IUserCreditCard;
}

export interface IUser {
  userDetails: Array<IUserDetails>;
  setUserDetails: (userDetails: IUserDetails) => void;
}

export interface IUserAction {
  type: string;
  payload: IUserDetails;
}

//  ******** Payment Context ********  \\

export interface IPaymentLocation {
  country: string;
  city: string;
  street: string;
  lat: number;
  lng: number;
}

export interface IPaymentDetails {
  id: string;
  paymentType: 'Cancelled' | 'Income' | 'Expense';
  paymentMethod: string;
  cancelled: boolean;
  time: string;
  date: string;
  currency: string;
  category: string;
  company: string;
  amount: string;
  location: IPaymentLocation;
}

export interface IPayment {
  paymentDetails: Array<IPaymentDetails>;
  setPaymentDetails: (paymentDetails: IPaymentDetails[]) => void;
}

export interface IPaymentAction {
  type: string;
  payload: IPaymentDetails[];
}

//  ******** Loader Context ********  \\
export interface ILoader {
  loading: boolean;
  setLoader: (loading: boolean) => void;
}

export interface ILoaderAction {
  type: string;
  payload: boolean;
}

//  ******** Navbar Context ********  \\
export interface INavbar {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface INavbarAction {
  type: string;
  payload: boolean;
}
