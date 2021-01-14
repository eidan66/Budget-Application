// import React, { FC, useState } from 'react';

// export type ICategory = {
//   name: string;
//   color: string;
// };

// export interface ICategories {
//   categories: Array<ICategory>;
// }

// export const initialDefaultValue: ICategories = {
//   categories: [
//     {
//       name: '',
//       color: '',
//     },
//   ],
// };
// const CategoryContext = React.createContext<ICategories>(initialDefaultValue);

// export const CategoriesContextProvider: FC<ICategories> = ({ children }) => {
//   const [categories, setCategories] = useState(initialDefaultValue);
//   return <CategoryContext.Provider value={{ categories, setCategories }}>{children}</CategoryContext.Provider>;
// };
