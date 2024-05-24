import { createContext, useContext } from 'react';
import useSignIn from './../hooks/useSignIn';

const authContext = createContext();

export function AuthProvider({ children }) {
  const { signInData, signIn } = useSignIn();

  const signInContext = {
    signInData,
    signIn,
  };

  return (
    <authContext.Provider value={signInContext}>
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(authContext);

  if (context === undefined) {
    throw new Error('context not provided');
  }
  return context;
}
