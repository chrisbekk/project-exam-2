import { createBrowserRouter } from 'react-router-dom';

// Import page components
import { Layout } from '../layout/';
import { Home } from '../pages/Home';
import { Venues } from '../pages/Venues';
import { Venue } from '../pages/Venue';
import { ConfirmBooking } from '../pages/ConfirmBooking';
import { SignIn } from '../pages/SignIn';
import { Register } from '../pages/Register';
import { BookingSuccess } from '../pages/BookingSuccess';
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
        path: '/venues/:venueId',
        element: <Venue />,
      },
      {
        path: 'confirm',
        element: <ConfirmBooking />,
      },
      {
        path: 'success',
        element: <BookingSuccess />,
      },
      {
        path: '/auth',
        element: <AuthRoot />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'create-venue',
            element: <CreateVenue />,
          },
        ],
      },
    ],
  },
]);
