import { useState } from 'react';

export default function useSignIn() {
  const [data, setData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  async function signIn(payload) {
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
        const errorData = await response.json();
        console.warn(`Sign In failed:`, errorData);
        const error = new Error('Failed to sign in.');
        error.data = errorData;
        throw error;
      }

      const userData = await response.json();
      setData(userData.data);

      return { userData: userData.data, apiKey };
    } catch (error) {
      setFetchError(error.data || { message: 'Internal Server Error' });
      return Promise.reject(error);
    }
  }

  const signOut = () => {
    setData(null);
    setFetchError(null);
  };

  return { data, fetchError, signIn, signOut };
}
