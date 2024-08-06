import { createBrowserRouter } from 'react-router-dom';
import { HomePage, AddTaskPage, AboutPage, Layout } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'add',
        element: <AddTaskPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);
