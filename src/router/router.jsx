import { createBrowserRouter } from 'react-router-dom';

// Import page components
import { Layout } from '../layout/';
import { HomePage } from '../pages/HomePage';
import { VenuesPage } from '../pages/VenuesPage';
import { VenuePage } from '../pages/VenuePage';
import { SignInPage } from '../pages/SignInPage';
import { RegisterPage } from '../pages/RegisterPage';
import { Error } from '../pages/Error';

// Protected Routes
import { AuthRoot } from '../pages/auth';
import { Profile } from '../pages/auth/Profile';
import { Dashboard } from '../pages/auth/Dashboard';
import { CreateVenue } from '../pages/auth/CreateVenue';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/signin',
        element: <SignInPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/venues',
        element: <VenuesPage />,
      },
      {
        path: '/venue/:venueId',
        element: <VenuePage />,
      },
      {
        path: '/auth',
        element: <AuthRoot />,
        children: [
          {
            path: 'profile/',
            element: <Profile />,
          },
          {
            path: 'dashboard/',
            element: <Dashboard />,
          },
          {
            path: 'create-venue/',
            element: <CreateVenue />,
          },
        ],
      },
    ],
  },
]);
