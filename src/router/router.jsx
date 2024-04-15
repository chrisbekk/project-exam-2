import { createBrowserRouter } from 'react-router-dom';

// Import page components
import { Root } from '../layout/Root';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '/test',
        element: <p>TEST ROUTE</p>,
      },
    ],
  },
]);
