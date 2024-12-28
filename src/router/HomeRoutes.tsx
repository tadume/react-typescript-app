import { FC } from 'react';
import { Setting } from '../components/pages/Setting';
import { Users } from '../components/pages/Users';
import { Home } from '../components/pages/Home';

export const HomeRoutes: Array<{ path: string; element: any }> = [
  {
    path: '',
    element: <Home />,
  },
  {
    path: 'setting',
    element: <Setting />,
  },
  {
    path: 'users',
    element: <Users />,
  },
];