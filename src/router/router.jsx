import { createBrowserRouter } from 'react-router-dom';

// Import page components
import { Layout } from '../layout/';
import { Home } from '../pages/Home';
import { Venues } from '../pages/Venues';
import { Venue } from '../pages/Venue';
import { SignIn } from '../pages/SignIn';
import { Register } from '../pages/Register';
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
        element: <Home />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/venues',
        element: <Venues />,
      },
      {
        path: '/venue/:venueId',
        element: <Venue />,
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
