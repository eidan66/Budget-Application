// ******** Categories Context ********  \\
export interface ICategory {
  name: string;
  color: string;
  id: string;
}

export interface ICategories {
  categories: Array<ICategory>;
  addCategory: (categories: ICategory) => void;
}

export interface ICategoriesAction {
  type: string;
  payload: Array<ICategories> | any;
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

export interface IAppAction {
  type: string;
  payload: Array<IApp> | any;
}

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
  setUserDetails: (userDetails: any) => void;
}

export interface IUserAction {
  type: string;
  payload: Array<IUser> | any;
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
  setPaymentDetails: (paymentDetails: any) => void;
}

export interface IPaymentAction {
  type: string;
  payload: Array<IPayment> | any;
}

//  ******** Loader Context ********  \\
export interface ILoader {
  loading: boolean;
  setLoader: (loading: boolean) => void;
}

export interface ILoaderAction {
  type: string;
  payload: ILoader | any;
}
