import { useState } from 'react';

export default function useSignIn() {
  const [signInData, setSignInData] = useState(null);

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
      setSignInData(data);
    } catch (error) {
      throw error;
    }
  };

  return { signInData, signIn };
}
