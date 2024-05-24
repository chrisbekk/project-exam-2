import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

import { UserProvider } from './context/userContext';

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  );
}

export default App;
