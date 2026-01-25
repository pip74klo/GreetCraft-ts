import { lazy } from 'react';

import { createBrowserRouter } from 'react-router-dom';

const BaseLayout = lazy(() => import('../layouts/BaseLayout'));
const HomePage = lazy(() => import('../../pages/Home'));
const CreateGreetingPage = lazy(() => import('../../pages/CreateGreeting'));
const NotFoundPage = lazy(() => import('../../pages/NotFound'));

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
        path: '/greeting',
        element: <CreateGreetingPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
