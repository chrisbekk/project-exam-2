import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { AuthProvider } from './context/authContext';
import ContextProvider from './context/venueContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AuthProvider>
        <ContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </ContextProvider>
      </AuthProvider>
    </LocalizationProvider>
  );
}

export default App;
