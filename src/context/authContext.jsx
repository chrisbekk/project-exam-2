import { createContext, useContext } from 'react';
import useSignIn from './../hooks/useSignIn';

const authContext = createContext();

export function AuthProvider({ children }) {
  const { user, setUser, apiKey, setApiKey, fetchError, signIn } = useSignIn();
  const signOut = () => {
    setUser(null);
    setApiKey(null);
  };

  const userContext = { user, setUser, apiKey, fetchError, signIn, signOut };

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
