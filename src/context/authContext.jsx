import { createContext, useContext, useEffect } from 'react';
import useSignIn from './../hooks/useSignIn';
import createApiKey from '../api/createApiKey';
const authContext = createContext();

export function AuthProvider({ children }) {
  const { data, fetchError, signIn, signOut } = useSignIn();
  console.log(data?.accessToken);
  useEffect(() => {
    if (data) {
      createApiKey(data.accessToken).then(res => console.log(res));
    }
  }, [data]);
  const userContext = { data, fetchError, signIn, signOut };

  return (
    <authContext.Provider value={userContext}>{children}</authContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(authContext);

  if (context === undefined) {
    throw new Error('context not provided');
  }
  return context;
}
