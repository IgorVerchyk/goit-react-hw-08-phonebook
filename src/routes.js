import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/HomeView')),
    private: true,
    restricted: false,
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./views/RegisterView')),
    private: false,
    restricted: true,
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./views/LoginView')),
    private: false,
    restricted: true,
  },
  {
    path: '/contacts',
    label: 'contacts',
    exact: true,
    component: lazy(() => import('./views/ContactsView')),
    private: true,
    restricted: false,
  },
];
