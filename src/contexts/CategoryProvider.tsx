// import React, { useState } from 'react';
// import { CategoriesContext, categoriesDefaultValue, Categories } from './userContext';
// export type Info = 'categories';

// interface CategoryProps {
//   children?: React.ReactChild;
// }

// const CategoryProvider = (props: CategoryProps) => {
//   const { children } = props;

//   const [categoryData, setCategoryData] = useState<Pick<Categories, Info>>(categoriesDefaultValue);

//   const categorySomething = {
//     categories: categoryData,
//     actions: setCategoryData,
//   };

//   return <CategoriesContext.Provider value={categorySomething}>{children}</CategoriesContext.Provider>;
// };

// export default CategoryProvider;
