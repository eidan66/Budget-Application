import { IRoute } from '../interfaces/routes';
import { Categories, Charts } from './../views/pages';
import { DashboardContainer, TransactionsContainer } from '../containers';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardContainer,
    exact: true,
  },
  {
    path: '/Categories',
    name: 'Categories',
    component: Categories,
    exact: true,
  },
  {
    path: '/Transactions',
    name: 'Transactions',
    component: TransactionsContainer,
    exact: true,
  },
  {
    path: '/Charts',
    name: 'Charts',
    component: Charts,
    exact: true,
  },
  /*
  {
    path: '/Setting',
    name: 'Setting',
    component: Setting,
    exact: true,
  },
  */
];

export default routes;
