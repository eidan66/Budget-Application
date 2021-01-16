/* Categories Context */
export interface ICategory {
  name: string;
  color: string;
  id: string;
}

export interface ICategories {
  categories: Array<ICategory>;
  addCategory: (categories: ICategory) => void;
}

export interface IAction {
  type: string;
  payload: Array<ICategories> | any;
}
