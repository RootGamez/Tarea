import { RouteObject } from 'react-router-dom';
import { ServicesView } from './ServicesView';

export const servicesRoute: RouteObject = {
  path: '/servicios',
  element: <ServicesView />,
};
