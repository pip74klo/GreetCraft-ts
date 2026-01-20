import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from '../layouts/BaseLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <div>HomePage</div>,
      },
      {
        path: '*',
        element: <div>NotFoundPage</div>,
      },

      // {
      //   path: '/greeting',
      //   element: <CreateGreetingPage />,
      // },
    ],
  },
]);
