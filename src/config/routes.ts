import { IRoute } from '../interfaces/routes';
import { Dashboard, Categories } from './../views/pages';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/Categories',
    name: 'Categories',
    component: Categories,
    exact: true,
  },
  /*   {
    path: '/Transactions',
    name: 'Transactions',
    component: Transactions,
    exact: true,
  },
  {
    path: '/Charts',
    name: 'Charts',
    component: Charts,
    exact: true,
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: Setting,
    exact: true,
  },
  */
];

export default routes;
