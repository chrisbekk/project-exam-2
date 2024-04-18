import { createContext, useContext, useState } from 'react';
const authContext = createContext();

export function AuthProvider({ children }) {
  const [data, setData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  async function useSignIn(payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    try {
      const response = await fetch(
        'https://v2.api.noroff.dev/auth/login',
        options,
      );
      if (!response.ok) {
        const { statusCode, errors } = await response.json();
        const errorData = { errors, statusCode };
        console.warn(
          `Sign In failed with the following status code: ${statusCode}`,
          errors,
        );
        const error = new Error('Failed to sign in.');
        error.data = errorData;
        throw error;
      }
      const userData = await response.json();
      setData(userData);
    } catch (error) {
      console.log(error);
      setFetchError(error.data);
      return Promise.reject(error);
    }
  }

  const signOut = () => {
    setData(null);
    setFetchError(null);
  };

  const userContext = { data, fetchError, useSignIn, signOut };

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
