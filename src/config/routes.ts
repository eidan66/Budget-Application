import { IRoute } from '../interfaces/routes';
import { Categories, Charts, Settings } from './../views/pages';
import { DashboardContainer, TransactionsContainer, MapContainer } from '../containers';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardContainer,
    exact: true,
  },
  {
    path: '/Dashboard',
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
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings,
    exact: true,
  },
  {
    path: '/Map',
    name: 'Map',
    component: MapContainer,
    exact: true,
  },
];

export default routes;
