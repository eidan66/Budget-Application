/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  component: any;
  props?: any;
}
export interface IRouteConstants {
  label: string;
  icon: string;
}
