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
// ******** Categories Context ********  \\

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
/*  ******** App Context ********  */
