import { useState, useEffect } from 'react';

const URL_STRING = 'https://v2.api.noroff.dev/auth/login';

export default function useSignIn(payload) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const FETCH_OPTIONS = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL_STRING, FETCH_OPTIONS);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData);
        }
        const userData = response.json();
        setData(userData);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return { data, error };
}
