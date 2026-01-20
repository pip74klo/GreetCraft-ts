import { lazy } from 'react';

import { createBrowserRouter } from 'react-router-dom';

const BaseLayout = lazy(() => import('../layouts/BaseLayout'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const NotFoundPage = lazy(
  () => import('../../pages/NotFoundPage/NotFoundPage'),
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },

      // {
      //   path: '/greeting',
      //   element: <CreateGreetingPage />,
      // },
    ],
  },
]);
