export const signInUser = async loginCredentials => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginCredentials),
  };
  try {
    const response = await fetch(
      'https://v2.api.noroff.dev/auth/login',
      options,
    );
    if (!response.ok) {
      const errorData = await response.json();
      const error = new Error('Failed to sign in');
      error.data = errorData;
      throw error;
    }
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.warn(error.data);
    throw error;
  }
};
