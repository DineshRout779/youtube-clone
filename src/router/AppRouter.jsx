import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Watch from '../pages/Watch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'watch',
        element: <Watch />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
