import { useState } from 'react';
import createApiKey from '../api/createApiKey';
export default function useSignIn() {
  const [user, setUser] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [apiKey, setApiKey] = useState(null);
  const signIn = async user => {
    const OPTIONS = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    try {
      const response = await fetch(
        'https://v2.api.noroff.dev/auth/login',
        OPTIONS,
      );
      if (!response.ok) {
        const errorData = await response.json();
        const error = new Error('Failed to sign in');
        error.data = errorData;
        throw error;
      }
      const { data } = await response.json();

      const apiKey = await createApiKey(data.accessToken);
      setUser({ data });
      setApiKey(apiKey);
    } catch (error) {
      setFetchError(error);
    }
  };
  return { user, setUser, fetchError, apiKey, setApiKey, signIn };
}
